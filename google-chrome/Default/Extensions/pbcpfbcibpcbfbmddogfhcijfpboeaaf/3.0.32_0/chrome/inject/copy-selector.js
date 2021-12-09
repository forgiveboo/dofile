function getSelector($el){
	const el = $($el);
	const id = el.attr('id');
	const classes = (el.attr('class') || "").split(' ').filter(className => (!className.match('amino-') && className.trim().length));
	let css_selector = el.prop('nodeName').toLowerCase();
	if( typeof id !== "undefined" ){
		css_selector += '#' + id;
	}
	if( classes.length > 0 ){
		css_selector += '.' + classes.join('.');
	}
	return css_selector;
}

var last_clicked_el = null;
$(document).on('mousedown', function(event){
	last_clicked_el = getSelector(event.target);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if( request.type == 'last_clicked_el' ){
		sendResponse({selector: last_clicked_el});
	}
});
