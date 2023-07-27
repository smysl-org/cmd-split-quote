(function (document, sceditor) {
	'use strict';

	sceditor.command.set('split-quote', {
		state: function (parent, firstBlock) {
			// TODO: check parent
			return 0;
		},
		txtExec: ['[/quote]', '[quote]'],
		exec: function () {
			// TODO: restore cursor position
			this.insert('[/quote]\n\n','\n\n[quote]');
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
