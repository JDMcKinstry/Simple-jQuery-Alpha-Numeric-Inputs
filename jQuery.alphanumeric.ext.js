;(function($) {	//	$.inputAlphaNumeric	//	set first variable "initializeON" to bool to toggle on || off from document.ready
	var initializeON = true;
	
	function __event(e) {
		return $.inputAlphaNumeric.keydown.event.apply($.inputAlphaNumeric, [e, this]);
	}
	
	function adjustValue() {	//	clean up inputs when feature is toggled 'on'
		if (this.state) {
			var regEx = this.regEx;
			this.inputs.each(function() {
				var a = $(this), b = a.val(), c = a.data('allow');
				if (b != '') switch(!0) {
					case $(this).hasClass('alpha'):
						a.val( b.split('').filter(function(v) { if (0 <= c.indexOf(v) || regEx.alpha.test(v)) return v; }).join('') );
						break;
					case $(this).hasClass('numeric'):
						a.val( b.split('').filter(function(v) { if (0 <= c.indexOf(v) || regEx.numeric.test(v)) return v; }).join('') );
						break;
					case $(this).hasClass('alphanumeric'):
						a.val( b.split('').filter(function(v) { if (0 <= c.indexOf(v) || regEx.alphanumeric.test(v)) return v; }).join('') );
						break;
				}
			});
		}
		return this;
	}
	
	function keyDown() {
		return { event: keyDownEvent, process: keyDownProcess }
	}
	function keyDownEvent(e, inp) {
		var a = $(inp), b = e.key, c = a.data('allow');
		return (!e.altKey && !e.ctrlKey) && 1 == b.length ? this.keydown.process.apply(this, [a, b, c]) : !0;
	}
	function keyDownProcess(a, b, c) {
		var regEx = this.regEx;
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
	
	function inputAlphaNumeric(initOn) {
		Object.defineProperties(this, {
			__state: { enumerable: false, value: false, writable: true },
			adjustVal: {
				enumerable: false,
				value: adjustValue,
				writable: false
			},
			classes: { enumerable: true, get: function() { return [ 'alpha', 'numeric', 'alphanumeric' ]; } },
			inputs: { enumerable: true, get: function() { return $(this.selector); } },
			keydown: { enumerable: false, get: keyDown },
			off: { value: function() { return this.toggle('off'); } },
			on: { value: function() { return this.toggle('on'); } },
			regEx: {
				enumerable: true,
				get: function() {
					return {
						alpha: new RegExp('[a-z]', 'i'),
						numeric: new RegExp('[0-9]'),
						alphanumeric: new RegExp('[a-z]|[0-9]', 'i')
					}
				}
			},
			selector: { enumerable: true, get: function() { return '.' + this.classes.join(', .'); } },
			state: {
				get: function() { return this.__state; },
				set: function(onOff) {
					switch (typeof onOff) {
						case 'boolean':
							this.__state = onOff
							break;
						case 'string':
							switch (onOff) {
								case 'on':
									this.__state = true;
									break;
								case 'off':
									this.__state = false;
									break;
								default:
									this.__state = true;
							}
							break;
						default:
							this.__state = true;
					}
					return this;
				}
			},
			toggle: {
				value: function(onOff) {
					this.state = void 0 == onOff ? !this.state : onOff;
					$(document)[this.state ? 'on' : 'off']('keydown', 'input', __event);
					return this.adjustVal();
				}
			}
		});
		if (initOn) this.on();
		return this;
	}
	$.inputAlphaNumeric = new inputAlphaNumeric(initializeON);
})(jQuery);
