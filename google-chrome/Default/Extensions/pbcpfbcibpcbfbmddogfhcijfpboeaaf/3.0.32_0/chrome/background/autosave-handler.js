function log(){
	chrome.extension.getBackgroundPage().console.log.apply(chrome.extension.getBackgroundPage().console.log, Array.from(arguments));
}

let editorValue = false;
let key;

chrome.runtime.onConnect.addListener(function (port) {
	if (port.name === "autosave") {
		//handle autosave messages
		port.onMessage.addListener(function (msg) {
			if (msg.save) {
				autosave();
			} else if (msg.flash) {
				flashSessionStorage(msg.style);
			} else {
				editorValue = msg.editorValue;
				key = msg.key;
			}
		});
		port.onDisconnect.addListener(autosave);
	}
});

function flashSessionStorage (style) {
	sessionStorage.setItem(style.key, JSON.stringify(style));
}

function autosave () {
	aminoAPI.service('styles').find({
		query: { key }
	}).then(styles => {
		const [ style ] = styles.data;
		if (!style) {
			if (editorValue.length) {
				aminoAPI.service('styles').create({ key, draft: editorValue, val: '' });
			}
		} else if (editorValue && editorValue != style.val) {
			aminoAPI.service('styles').patch(style._id, { draft: editorValue });
		} else if (style.val.length) {
			aminoAPI.service('styles').patch(style._id, { draft: false });
		} else {
			aminoAPI.service('styles').remove(style._id);
		}
	});
}
