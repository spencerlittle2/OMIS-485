/*
* jQuery Pull Quote with Animation- By Dynamic Drive (www.dynamicdrive.com)
* Created April 29th, 2018
*/


;(function($){

	var defaults = {outputEl: ['blockquote', 'rightquote'], scrollReveal: { duration: 2000, scale: 1, distance: '20px', reset: true }, loc: 'parent'}
	if (typeof ScrollReveal != "undefined"){
		var sr = ScrollReveal()
	}

	$.fn.ddpullquote = function(options){ // set up DD Pull Quotes plugin
		var s = $.extend({}, defaults, options)


		return this.each(function(){ //return jQuery obj
			var $target = $(this)
			var $pullquote = $(document.createElement(s.outputEl[0]))
			$pullquote.addClass(s.outputEl[1]).html($target.html())

			if (s.loc == 'header'){
				var $outerMostParent = $target
				    .parentsUntil("*:has('h1, h2, h3, h4, h5, h6')")
					.last()
				var $firstElafterHeader = $outerMostParent.prevUntil(":header") || $firstElafterHeader
				$firstElafterHeader.before($pullquote)	
			}
			else{
				var selector = s.loc.split(':')
				if (selector.length == 1){ // insert inside immediate parent
					$target.parent().prepend($pullquote)
				}
				else{ // inert inside closest parent of the specified type
					$target.closest(selector[1]).prepend($pullquote)
				}

			}


			if (typeof ScrollReveal != "undefined" && ScrollReveal != 'none'){
				sr.reveal($pullquote.get(0), s.scrollReveal)
			}

		}) // end return this.each

	}

})(jQuery);



jQuery(function($){ // on page load

	$('span.pullout').ddpullquote({
		loc: 'parent',
		outputEl: ['blockquote', 'rightquote'],
		scrollReveal: { duration: 2000, scale: 1, distance: '20px', reset: true }
	})


});