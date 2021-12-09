const socket = io(ENV.AMINO_API_URL, {transports: ['websocket'], upgrade: false});
const aminoAPI = feathers();
let accessToken;
aminoAPI.configure(feathers.socketio(socket));

chrome.storage.sync.get(['apiAccessToken'], res => {
	if ( res.apiAccessToken ) {
		accessToken = res.apiAccessToken;
		socket.connect();
	} else {
		logout();
		logoutCleanup();
	}
});

socket.on('connect', () => {
	updateAuthJWT();
});

chrome.storage.onChanged.addListener((changes, area) => {
	if (area === 'sync' && changes.hasOwnProperty('apiAccessToken')) {
		if (changes.apiAccessToken.newValue) {
			accessToken = changes.apiAccessToken.newValue;
			socket.connect();
		} else {
			logoutCleanup();
		}
	}
});

chrome.runtime.onMessageExternal.addListener((req, sender, sendResponse) => {
	if (req.hello) {
		sendResponse('hi');
	}

	if (req.accessToken) {
		accessToken = req.accessToken;
		chrome.storage.sync.set({apiAccessToken: accessToken, ___extension__flags_has_logged_in: true});
		window.localStorage.setItem('feathers-jwt', accessToken);
	}

	if (req.logout) {
		logout();
		logoutCleanup();
	}

	if (req.migrate) {
		chrome.storage.sync.get(null, res => {
			sendResponse(res);
		});
	}

	if (req.deleteStyleKeys) {
		chrome.storage.sync.remove(req.deleteStyleKeys);
	}
});

function logout () {
	chrome.storage.sync.remove('apiAccessToken');
	window.localStorage.removeItem('feathers-jwt');
}

function logoutCleanup () {
	socket.disconnect();
	removeStyles();
	setBrowserAction(false);
	removeIconListeners();
	setIconState(true);
}

function updateAuthJWT () {
	socket.emit('create', 'authentication', {
		strategy: 'jwt',
		accessToken
	}, (err) => {
		if (!err) {
			initOptions();
			setIconListeners();
		} else {
			console.log('AUTH ERROR:', err);
			logout();
			logoutCleanup();
		}
	});
}

function iconStateListener () {
	setIconState();
}

function setIconListeners() {
	chrome.windows.onCreated.addListener(iconStateListener);
	chrome.windows.onFocusChanged.addListener(iconStateListener);
	chrome.tabs.onActivated.addListener(iconStateListener);
	chrome.tabs.onCreated.addListener(iconStateListener);
	chrome.tabs.onUpdated.addListener(iconStateListener);
}

function removeIconListeners() {
	chrome.windows.onCreated.removeListener(iconStateListener);
	chrome.windows.onFocusChanged.removeListener(iconStateListener);
	chrome.tabs.onActivated.removeListener(iconStateListener);
	chrome.tabs.onCreated.removeListener(iconStateListener);
	chrome.tabs.onUpdated.removeListener(iconStateListener);
}
