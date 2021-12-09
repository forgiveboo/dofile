function log(){
	chrome.extension.getBackgroundPage().console.log.apply(chrome.extension.getBackgroundPage().console.log, Array.from(arguments));
}

const showNotification = notification => {
	if (notification.isPush) {
		const options = {
			type: "basic",
			title: notification.title,
			message: notification.body,
			iconUrl: chrome.extension.getURL("assets/images/icon-context.png"),
			priority: 1
		}
		if (notification.link.length) {
			chrome.notifications.create('link:' + notification.link, options);
		} else {
			chrome.notifications.create(options);
		}
	}
};

// create a on Click listener for notifications
chrome.notifications.onClicked.addListener(function(notificationId) {
	if (notificationId.match('link:')) {
		const [ type, url ] = notificationId.split(':');
		chrome.tabs.create({ url });
	}
});

aminoAPI.service('notifications')
.on('created', showNotification)
