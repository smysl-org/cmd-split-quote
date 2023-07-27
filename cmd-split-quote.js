(function (document, sceditor) {
	'use strict';

	sceditor.command.set('split-quote', {
		state: function (parent, firstBlock) {
			// TODO: check parent
			return 0;
		},
		txtExec: ['[/quote]', '[quote]'],
		exec: function () {
			
			var rangeHelper = this.getRangeHelper();
			var range = rangeHelper ? null : rangeHelper.selectedRange();
			var newLine =  (range && !range.collapsed) ? '\n' : '';

			// TODO: restore cursor position
			this.insert('[/quote]' + newLine,'[quote]');
			this.toggleSourceMode();
			this.toggleSourceMode();
		}
	});

	sceditor.plugins.cmd_split_quote = function ()
	{
		var editor;
		this.init = function ()
		{
			editor = this;
		}
		this.signalReady = function ()
		{
			editor.css(cmd_split_quote_css);
		};
	};

})(document, sceditor);
