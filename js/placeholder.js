/**
 * placeolder
 * pong
 * 1242918995@qq.com
 */
(function() {
	/*if the browser supports placeholder we do nothing*/
	if ('placeholder' in document.createElement('input')) {
		return false;
	}
	
	$('body').addClass('ie');
	
	$('.js-placeholder').click(function() {
		$(this).hide().next().focus();
	});
	$("input[type='text'], input[type='password'], textarea").each(function(index, element) {
		var $cur = $(element);
		
		if ($cur.val() != "") {
			$cur.prev('.js-placeholder').hide();
		};
		
		$cur.focus(function() {
			if ($cur.val() == "") {
				$cur.prev('.js-placeholder').hide();
			}
		}).blur(function() {
			if ($cur.val() == "") {
				$cur.prev('.js-placeholder').show();
			}
		}).keydown(function() {
			$cur.prev('.js-placeholder').hide();
		});
	});
})();
