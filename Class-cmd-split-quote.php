<?php

/**
 * @package BBCode Div
 * @version 1.0.0
 * @author o-o-o @ smysl.org
 * @copyright Copyright (c) 2023, o-o-o
 * @license http://opensource.org/licenses/MIT
 */

if (!defined('SMF'))
	die('No direct access...');

class CmdSplitQuoteSetup
{
	public static function integrate_sceditor_options(&$sce_options)
	{
		$sce_options['plugins'] = ($sce_options['plugins'] != '' ? $sce_options['plugins'] . ',' : '') . 'cmd_split_quote';
	}

	public static function integrate_bbc_buttons(&$buttons)
	{
		global $settings, $txt;

		loadCSSFile('cmd-split-quote.css');
		addJavaScriptVar(
			'cmd_split_quote_css',
			str_replace(
				['..', "\n", "\t"],
				[$settings['default_theme_url'], '', ''],
				file_get_contents($settings['default_theme_dir'] . '/css/cmd-split-quote.css')
			),
			true
		);
		loadJavaScriptFile('cmd-split-quote.js', array('minimize' => true));
		loadLanguage('cmd-split-quote');
		$temp = array();
		foreach ($buttons[1] as $tag)
		{
			$temp[] = $tag;

			if (isset($tag['code']) && $tag['code'] == 'quote')
			{
				$temp = array_merge(
					$temp,
					array(
						array(
							'code' => 'split-quote',
							'description' => $txt['cmd-split-quote-btn'],
						),
					)
				);
			}
		}

		$buttons[1] = $temp;
	}
}