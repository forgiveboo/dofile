chrome.runtime.onInstalled.addListener(function(details) {
	injectContentScriptInAllThePlaces();
	if (details.reason === "install") {
		chrome.tabs.create({
			url: ENV.AMINO_APP_URL + '/create-account?context=extension',
			active: true
		});
		chrome.storage.sync.set({___extension__flags_just_installed: true});
	} else {
		chrome.storage.sync.set({___extension__flags_just_updated: true});
	}
	return false;
});

function injectContentScriptInAllThePlaces () {
	const details = chrome.app.getDetails();
	chrome.tabs.query({}, tabs => {
		for (let tab of tabs) {
			if (!tab.url.match("chrome://") && !tab.url.match("chrome.google.com") && !tab.url.match("chrome-extension://")) {
				for (let script of details.content_scripts[0].js) {
					chrome.tabs.executeScript(tab.id, {file: script});
				}
				for (let script of details.content_scripts[1].js) {
					chrome.tabs.executeScript(tab.id, {file: script});
				}
			}
		}
	});
}

// chrome.runtime.setUninstallURL(ENV.AMINO_APP_URL + '/goodbye/');
