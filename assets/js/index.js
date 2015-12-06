/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
	"use strict";

	$('.post-title').after($('<hr>'));

	$(document).ready(function(){

		// On the home page, move the blog icon inside the header 
		// for better relative/absolute positioning.

		//$("#blog-logo").prependTo("#site-head-content");
		//
		$('pre').each(function(i, block) {
			hljs.highlightBlock(block);
		});
	});
}(jQuery));
