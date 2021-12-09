function log(){
  chrome.extension.getBackgroundPage().console.log.apply(chrome.extension.getBackgroundPage().console.log, Array.from(arguments));
}

const activeIcon = 'assets/images/icon.png';
const activeWithStylesIcon = 'assets/images/icon-badge.png';
const disabledIcon = 'assets/images/icon-disabled.png';

function setIconState (offline) {
	chrome.tabs.query({}, function(tabs) {
		for (let tab of tabs) {
			const tabURL = tab.url;
			const tabId = tab.id; 
			if (offline || options.disabled) {
				chrome.browserAction.setIcon({ path: disabledIcon, tabId });
			} else if (tabURL) {
				if (urlHasStyles(tabURL)) {
					chrome.browserAction.setIcon({path: activeWithStylesIcon, tabId});
				} else {
					chrome.browserAction.setIcon({path: activeIcon, tabId});
				}
			}
		}
	});
}
