;(function($) {
	var regEx = {
			alpha: new RegExp('[a-z]', 'i'),
			numeric: new RegExp('[0-9]'),
			alphanumeric: new RegExp('[a-z]|[0-9]', 'i')
		}
	function procInput(a, b, c) {
		switch(!0) {
			case a.hasClass('alpha'):
				return c ? 0 <= c.indexOf(b) || regEx.alpha.test(b) : regEx.alpha.test(b);
			case a.hasClass('numeric'):
				return c ? 0 <= c.indexOf(b) || regEx.numeric.test(b) : regEx.numeric.test(b);
			case a.hasClass('alphanumeric'):
				return c ? 0 <= c.indexOf(b) || regEx.alphanumeric.test(b) : regEx.alphanumeric.test(b);
		}
		return !0;
	}
	$(document).on('keydown', 'input', function(e) {
		var a = $(this), b = e.key, c = a.data('allow');
		return 1 == a.length ? procInput(a, b, c) : !0;
	});
})(jQuery);
