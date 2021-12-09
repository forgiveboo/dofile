let hideStyles = false;

const globalSelector = 'style.amino.amino-global';
const localSelector  = 'style.amino.amino-local';

const methods = {
	inject,
	remove,
	hideStyles: doHideStyles,
	showStyles: doShowStyles
};

chrome.runtime.sendMessage({type: "pageLoaded"}, ({ isDisabled, localStyle, globalStyle }) => {
	hideStyles = isDisabled;
	if (localStyle) {
		inject('local', localStyle);
	}
	if (globalStyle) {
		inject('global', globalStyle);
	}
});

chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => {
	if (request.type == 'apply-styles') {
		const { items } = request;
		for (let item of items) {
			const { method, type, payload } = item;
			methods[method](type, payload);
		}
	}
});

function doHideStyles () {
	hideStyles = true;
	toggleMediaAttr();
}

function doShowStyles () {
	hideStyles = false;
	toggleMediaAttr();
}

function toggleMediaAttr () {
	if (hideStyles) {
		$('style.amino').attr('media', 'not all');
	} else {
		$('style.amino').removeAttr('media');
	}
}

function inject (type, style) {
	let selector, block;
	if (style.active && style.val.length) {
		let hideStyleAttr = ' media="not all"';
		Sass.compile(style.val, css => {
			if (type == 'global') {
				block = '<style class="amino amino-global"' + (hideStyles ? hideStyleAttr : '') + '>' + css.text + '</style>';
				selector = globalSelector;
			}
			if (type == 'local') {
				block = '<style class="amino amino-local"' + (hideStyles ? hideStyleAttr : '') + '>' + css.text + '</style>';
				selector = localSelector;
			}
			if ($(selector).length > 0) {
				$(selector).replaceWith(block);
			} else {
				$(block).insertAfter('body');
			}
		});
	}
}

function remove (type) {
	if (type == 'global') {
		$(globalSelector).remove();
	}
	if (type == 'local') {
		$(localSelector).remove();
	}
}
