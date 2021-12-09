let winId;
function popout() {
	if (!winId){
		chrome.tabs.query({lastFocusedWindow: true, active: true}, function (tabs) {
			chrome.windows.create({
				url: chrome.extension.getURL('index.html#/popout'),
				width: 490,
				height: 610,
				type: 'popup',
				focused: false,
				top: 100,
				left: 100
			}, function(win) {
				winId = win.id;
				setTimeout(function () {chrome.windows.update(winId, { "focused": true });}, 1500);
			});
		});
	} else {
		chrome.windows.update(winId, { "focused": true }); 
	}
}

chrome.commands.onCommand.addListener(popout);
chrome.windows.onRemoved.addListener(id => {
	if(id == winId) {
		winId = null;
	}
});
setBrowserAction(false);
function setBrowserAction (popout) {
	if (popout) {
		chrome.browserAction.setPopup({popup: ''});
	} else {
		chrome.browserAction.setPopup({popup: 'index.html'});
	}
} 
chrome.browserAction.onClicked.addListener(popout);

chrome.runtime.onConnect.addListener(function (port) {
	if (port.name === "commands") {
		port.onMessage.addListener(function (msg) {
			switch (msg.command)
			{
				case 'popout': popout();
				break;
				default: 
			}
		});
	}
});
