let inspectMode = false;
const context = {
	all: ["page", "selection", "editable", "link", "frame", "image", "video"]
};
const notificationOptions = {
	type: 'basic',
	iconUrl: chrome.extension.getURL("assets/images/icon-context.png"),
	title: 'Element copied to clipboard',
	message: 'Paste in Amino Editor'
};

function log(){
	chrome.extension.getBackgroundPage().console.log.apply(chrome.extension.getBackgroundPage().console.log, Array.from(arguments));
}

function copyTextToClipboard(text) {
	const copyFrom = document.createElement("textarea");
	copyFrom.textContent = text;
	const body = document.getElementsByTagName('body')[0];
	body.appendChild(copyFrom);
	copyFrom.select();
	document.execCommand('copy');
	body.removeChild(copyFrom);
	gaEvent('copySelector', text);
}

function getElement(el, tab, cb){
	chrome.tabs.sendMessage(tab.id, {type: "last_clicked_el"}, function(response) {
		copyTextToClipboard(response.selector);
		chrome.notifications.create(notificationOptions);
		if (typeof cb !== "undefined") {
			cb(response.selector);
		}
	});
}

function changeInspectMode (el, tab) {
	chrome.tabs.sendMessage(tab.id, {type: 'inspect'});
	updateInspectCheckbox(!inspectMode);
}

function updateInspectCheckbox (bool) {
	inspectMode = bool;
	chrome.contextMenus.update("inspect", {
		checked: bool
	}, () => {
		const { lastError } = chrome.runtime;
	});
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if( request.type == 'inspect' && typeof request.hasOwnProperty('checked') ){
		updateInspectCheckbox(request.checked);
	}
	if ( request.type == 'drops' ) {
		chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (img) {
			sendResponse(img);
		});
	}
	return true;
});


function getTab (cb) {
    chrome.tabs.query({active: true, lastFocusedWindow: true, windowType: 'normal'}, function (tabs) {
        cb({id: activeTab} || tabs[0]);
    });
}

chrome.tabs.onActivated.addListener(activeInfo => {
	activeTab = activeInfo.tabId;
	chrome.tabs.sendMessage(activeTab, {type: 'inspect', query: 'state'});
});

function addContextMenu () {
  removeContextMenu();
  chrome.contextMenus.create({
    title: "Amino",
    contexts: context.all,
    id: "parent"
  });
  chrome.contextMenus.create({
    title: "Copy This Selector",
    contexts: context.all,
    onclick: getElement,
    parentId: "parent"
  });
  chrome.contextMenus.create({
    id: "inspect",
    title: "Inspect Elements",
    contexts: context.all,
    type: "checkbox",
    onclick: changeInspectMode,
    parentId: "parent"
  });
  chrome.contextMenus.create({
    type: "separator",
    contexts: context.all,
    parentId: "parent"
  });
  chrome.contextMenus.create({
    title: "Open Editor",
    contexts: context.all,
    onclick: popout,
    parentId: "parent"
  });
  chrome.contextMenus.create({
    type: "separator",
    contexts: context.all,
    parentId: "parent"
  });
  chrome.contextMenus.create({
    title: "Reload",
    contexts: context.all,
    onclick: syncStyles,
    parentId: "parent"
  });
}

function removeContextMenu () {
	chrome.contextMenus.removeAll();
}

function setContextMenu () {
	if (typeof options.context === "undefined" || options.context === true) {
		addContextMenu();
	} else {
		removeContextMenu();
	}
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-89368242-1']);

function gaEvent(action, label, value) {
	_gaq.push(['_trackEvent', 'context', action, label, value]);
}

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
