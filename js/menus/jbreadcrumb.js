/**
 * jBreadCrumbCustom 1.0 by Nojan A. (nojanarabi@gmail.com) - based on jBreadCrumb script 1.1 by Jason Roy
 * - MIT Licensed: http://www.opensource.org/licenses/mit-license.php
 **/
 
(function($)
{

    /* Private variables */
    var _options = {};
    var _container = {};
    var _breadCrumbElements = {};
    var _originalContainerWidth = '';
    var _initialCollapsingCounter = 0;
    var _breadcrumbsResizingTimeout = '';
    
    /* Public functions */
    jQuery.fn.jBreadCrumbCustom = function(options)
    {
        _options = $.extend({}, $.fn.jBreadCrumbCustom.defaults, options);
        
        return this.each(function()
        {
            _container = $(this);
            setupBreadCrumb();
        });
    };
    
    /* Private functions */
    function setupBreadCrumb()
    {
		/* Check if easing plugin exists. If it doesn't, use "swing" */
		if(typeof(jQuery.easing) !== 'object')
		{
			_options.easing = 'swing';
		}
    
        /* The reference object containing all of the breadcrumb elements */
        _breadCrumbElements = jQuery(_container).find('li');
        
        /* If the breadcrumb contains nothing, don't do anything */
        if (_breadCrumbElements.length > 0) 
        {
        	compressBreadCrumb();

        	/* Window resize listener */
        	$(window).resize(function(event) {
        		if($(window).width() < 500) {
        			unwind_all();
        		} else {
        			if(typeof(_breadcrumbsResizingTimeout) != 'undefined') {
	        			window.clearTimeout(_breadcrumbsResizingTimeout);
	        		}
	        		_breadcrumbsResizingTimeout = setTimeout(function(event) {
		        		setupBreadCrumb();
	        		}, 300);
        		}
        	});
		};
    };
    
    /* check to see if it needs compressing */
    function needsCompressing()
    {

    	unwind_all();

    	var firstElement = jQuery(_breadCrumbElements[0]);
    	var lastElement = jQuery(_breadCrumbElements[_breadCrumbElements.length - 1]);

        lastElement.addClass('last');
        firstElement.addClass('first');

        var firstElementLeft = parseInt(firstElement.position().left);
        var lastElementRight = parseInt(lastElement.position().left) + parseInt(lastElement.width());

        _originalContainerWidth = lastElementRight - firstElementLeft;

        /* If elements width is more than their container's width then compress! */
        if( (lastElementRight - firstElementLeft) > _container.width() )
        {
        	var startingFrom = _options.startingFrom-1-1;
        	var listWidth = lastElementRight - firstElementLeft;

        	returningArray = [];

        	while(listWidth > _container.width()) {
        		startingFrom++;
				listWidth = listWidth - jQuery(_breadCrumbElements[startingFrom]).width() + 10;
				returningArray.push(startingFrom);
        	}

            return returningArray;
        }
        else
        {
        	return false;
        };
    }

    function compressBreadCrumb()
    {

	    unwind_all();

		if($(window).width() >= 500)
		{ /* In case window width is more than or equal to 500px */
			
			if(needsCompressing !== false)
			{
	        	
	        	itemsToRemove = needsCompressing();
	        
		        /* We compress only elements determined by the formula setting below */
		        $(_breadCrumbElements).each(function(i, listElement)
		        {

		            if (in_array(i, itemsToRemove)) 
		            {
		                jQuery(listElement).find('>*').wrap('<span></span>');

		                var options = 
		                {
		                    id: i,
		                    width: jQuery(listElement).width(),
		                    isAnimating: false,
		                    element: jQuery(listElement).find('span')
		                };

		                jQuery(listElement).bind('mouseover', options, expandBreadCrumb).bind('mouseout', options, shrinkBreadCrumb);
		                jQuery(listElement).find('>*').unbind('mouseover', expandBreadCrumb).unbind('mouseout', shrinkBreadCrumb);

		                // Collapsing item (Each step with more delay to create the order effect)
		                listElement.autoInterval = setInterval(function()
		                {
		                    clearInterval(listElement.autoInterval);
		                    jQuery(listElement).find('span').stop().animate(
		                    {
		                        width: _options.collapsedWidth
		                    }, _options.animationDuration, _options.easing);
		                }, (120 * (++_initialCollapsingCounter)));
		                // Collapsing item (Each step with more delay to create the order effect)
		            }
		        });
				_initialCollapsingCounter = 0;
	        }

		}
    };
    
    function unwind_all() {
    	$(_breadCrumbElements).each(function(i, listElement)
	    {
	    	jQuery(listElement).unbind('mouseover').unbind('mouseout');
			jQuery(listElement).find('span').animate(
	        {
	            width: 'auto'
	        }, 0, _options.easing);
        });
    }

    function expandBreadCrumb(e)
    {
        var elementID = e.data.id;
        var originalWidth = e.data.width;
        jQuery(e.data.element).stop();
        jQuery(e.data.element).animate(
        {
            width: originalWidth
        }, 
        {
            duration: _options.animationDuration,
            easing: _options.easing,
            queue: false
        });
        return false;
    };
    
    function shrinkBreadCrumb(e)
    {
        var elementID = e.data.id;
        jQuery(e.data.element).stop();
        jQuery(e.data.element).animate(
        {
            width: _options.collapsedWidth
        }, 
        {
            duration: _options.animationDuration,
            easing: _options.easing,
            queue: false
        });
        return false;
    };

    function in_array(needle, haystack, argStrict) {
	  var key = '',
	    strict = !! argStrict;
	  if (strict) {
	    for (key in haystack) {
	      if (haystack[key] === needle) {
	        return true;
	      }
	    }
	  } else {
	    for (key in haystack) {
	      if (haystack[key] == needle) {
	        return true;
	      }
	    }
	  }
	  return false;
	}

    /* Public global variables */
    jQuery.fn.jBreadCrumbCustom.defaults = 
    {
        animationDuration: 500,
        collapsedWidth: 10,
        easing: 'easeOutQuad',
        startingFrom: 2
    };
    
})(jQuery);