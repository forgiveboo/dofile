let options = {};
function initOptions () {
	aminoAPI.service('options').find().then(res => {
		updateOptions(res.total === 1 ? res.data[0] : {});
		syncStyles().then(setIconState);
	});
	aminoAPI.service('options').off('patched', updateOptions);
	aminoAPI.service('options').on('patched', updateOptions);
}

function disableOptions () {
	aminoAPI.service('options').off('patched', updateOptions);
}

function updateOptions (opts) {
	options = opts;
	setBrowserAction(options.popout || false);
	setContextMenu();
	if (options.disabled === true) {
		setIconState(true);
		hideStyles();
	} else {
		setIconState();
		showStyles();
	}
}
