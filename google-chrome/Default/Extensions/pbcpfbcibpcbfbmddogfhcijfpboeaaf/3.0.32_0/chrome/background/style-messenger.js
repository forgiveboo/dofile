aminoAPI.service('styles')
.on('created', style => {
	addStylesToCache([style]);
	applyStylesToUrl(style.key);
	setIconState();
})
.on('patched', style => {
	if (style.active) {
		addStylesToCache([style]);
	} else {
		removeStylesFromCache([style])
	}
	applyStylesToUrl(style.key);
	setIconState();
})
.on('removed', style => {
	removeStylesFromCache([style]);
	applyStylesToUrl(style.key);
	setIconState();
});


chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => {
	if (request.type === 'pageLoaded') {
		const [ href, hostname ] = sender.url;
		const localStyle = sessionStorage.getItem(href);
		const globalStyle = sessionStorage.getItem(hostname);
		sendResponse({ isDisabled: options.disabled, localStyle: ( localStyle ? JSON.parse(localStyle) : false ), globalStyle: ( globalStyle ? JSON.parse(globalStyle) : false ) }); 
	}
});


chrome.tabs.onActivated.addListener( ({ tabId }) => {
	chrome.tabs.get(tabId, tab => {
		applyStylesToTab(tab);
	});
});

chrome.tabs.onUpdated.addListener( (tabId, changeInfo, tab) => {
	if (changeInfo.url || changeInfo.status) {
		applyStylesToTab(tab);
	}
});

function applyStylesToUrl (url) {
	chrome.tabs.query({}, tabs => {
		for (let tab of tabs) {
			if (formatUrlKeys(tab.url).includes(url)) {
				applyStylesToTab(tab);
			}
		}
	});
}

function applyStylesToTab (tab) {
	const { url } = tab;
	const [ href, hostname ] = formatUrlKeys(url);
	const localStyle = sessionStorage.getItem(href);
	const globalStyle = sessionStorage.getItem(hostname);
	const message = { type: 'apply-styles', items: [] };
	if (localStyle) {
		message.items.push({ method: 'inject', type: 'local', payload: JSON.parse(localStyle) });
	} else {
		message.items.push({ method: 'remove', type: 'local' });
	}
	if (globalStyle) {
		message.items.push({ method: 'inject', type: 'global', payload: JSON.parse(globalStyle) });
	} else {
		message.items.push({ method: 'remove', type: 'global' });
	}
	if (message.items.length) {
		chrome.tabs.sendMessage(tab.id, message);
	}
}

function applyAllStyles () {
	chrome.tabs.query({}, tabs => {
		for (let tab of tabs) {
			applyStylesToTab(tab);
		}
	});
}

function urlHasStyles (url) {
	const [ href, hostname ] = formatUrlKeys(url);
	return sessionStorage.getItem(href) || sessionStorage.getItem(hostname) || false;
}

function hideStyles () {
	chrome.tabs.query({}, tabs => {
		for (let tab of tabs) {
			chrome.tabs.sendMessage(tab.id, { type: 'apply-styles', items: [{ method: 'hideStyles' }] });
		}
	});
}

function showStyles () {
	chrome.tabs.query({}, tabs => {
		for (let tab of tabs) {
			chrome.tabs.sendMessage(tab.id, { type: 'apply-styles', items: [{ method: 'showStyles' }] });
		}
	});
}

function formatUrlKeys(url) {
	const el = document.createElement('a');
	el.href = url;
	return [el.href, el.hostname];
};

function addStylesToCache(styles) {
	for (let style of styles) {
		sessionStorage.setItem(style.key, JSON.stringify(style));
	}
}

function removeStylesFromCache(styles) {
	for (let style of styles) {
		sessionStorage.removeItem(style.key);
	}
}

function preloadStyles(page) {
	page = page || 1;
	const limit = 100;
	const skip = (page - 1) * limit;
	return findAllStyles(limit, skip).then(res => {
		if (res.total > 0) {
			const styles = res.data;
			addStylesToCache(styles);
			if ((res.skip + res.limit) < res.total) {
				return preloadStyles(++page);
			}
		}
	});
}

function removeStyles () {
	sessionStorage.clear();
	chrome.tabs.query({}, function(tabs) {
		for (let tab of tabs) {
			chrome.tabs.sendMessage(tab.id, { type: 'apply-styles', items: [{ method: 'remove', type: 'local' }] });
			chrome.tabs.sendMessage(tab.id, { type: 'apply-styles', items: [{ method: 'remove', type: 'global' }] });
		}
	});
}

function syncStyles () {
	sessionStorage.clear();
	return preloadStyles().then(applyAllStyles);
}

function findAllStyles(limit, skip) {
	return aminoAPI.service('styles').find({
		query: {
			active: true,
			$limit: limit, 
			$skip: skip,
			$sort: {
				createdAt: 1
			}
		}
	});
}
