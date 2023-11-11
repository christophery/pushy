/*! Pushy - v1.4.0 - 2020-12-28
* Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.
* https://github.com/christophery/pushy/
* by Christopher Yee */

(function ($) {
	var pushy = $('.pushy'), //menu css class
		body = $('body'),
		containerSelector = '#container',
		menuBtnWrapperSelector = '.wrp-pushy-trigger',
		menuBtnWrapper = $(menuBtnWrapperSelector),
		menuBtnSelector = '.menu-btn', //set default menu button CSS class
		menuBtn = menuBtnWrapper.find(menuBtnSelector),
		menuBtnFocus = menuBtnWrapper.find(menuBtnSelector),
		push = $('.push'), //css class to add pushy capability
		pushyLeft = 'pushy-left', //css class for left menu position
		pushyOpenLeft = 'pushy-open-left', //css class when menu is open (left position)
		pushyOpenRight = 'pushy-open-right', //css class when menu is open (right position)
		siteOverlay = $('.site-overlay'), //site overlay
		menuLinkFocus = $(pushy.attr('data-focus')), //focus on link when menu is open
		menuSpeed = 200, //jQuery fallback menu speed
		menuWidth = pushy.width() + 'px', //jQuery fallback menu width
		submenuClass = '.pushy-submenu',
		submenuOpenClass = 'pushy-submenu-open',
		submenuClosedClass = 'pushy-submenu-closed',
		lastButtonPressed = null,
		devBodyClass = '';

	
    // check if container-selector data attribute exists
    if (typeof pushy.attr('data-container-selector') !== 'undefined') {
        containerSelector = pushy.attr('data-container-selector');
    }
    var container = $(containerSelector);

	// Get User Custom Body Classes 
	function getDevBodyClasses(currentButton){
		var btnParent = currentButton.closest(menuBtnWrapperSelector);

		if( typeof btnParent.attr('data-pushy-body-class') !== 'undefined' ) {
			devBodyClass = btnParent.attr('data-pushy-body-class');
		}

	}

	// Get Pushy Menu Target for the current button pressed
	function getPushyMenuTarget(currentButton) {
		var btnParent = currentButton.closest(menuBtnWrapperSelector);

		if( typeof btnParent.attr('data-pushy-target') !== 'undefined' ) {
			pushy = $(btnParent.attr('data-pushy-target'));
		}
	}


	//close menu w/ esc key
	$(document).on('keyup', function(e) {
		//check if esc key is pressed
		if (e.keyCode == 27) {

			//check if menu is open
			if( body.hasClass(pushyOpenLeft) || body.hasClass(pushyOpenRight) ){
				if(cssTransforms3d){
					closePushy(lastButtonPressed); //close pushy
				}else{
					closePushyFallback(lastButtonPressed);
					opened = false; //set menu state
				}
				
				//focus on menu button after menu is closed
				if(menuBtnFocus){
					menuBtnFocus.trigger('focus');
				}
				
			}

		}   
	});

	function togglePushy(currentButton){

		getPushyMenuTarget(currentButton);
		getDevBodyClasses(currentButton);
		
		//add class to body based on menu position
		if( pushy.hasClass(pushyLeft) ) {
			body.toggleClass(pushyOpenLeft);
			
		}else{
			body.toggleClass(pushyOpenRight);

		}
		pushy.toggleClass('active');
		body.toggleClass(devBodyClass);

		//focus on link in menu after css transition ends
		if(menuLinkFocus){
			pushy.one('transitionend', function() {
				menuLinkFocus.trigger('focus');
			});
		}
		
	}

	function closePushy(currentButton){
		
		getPushyMenuTarget(currentButton);
		getDevBodyClasses(currentButton);

		if( pushy.hasClass(pushyLeft) ){
			body.removeClass(pushyOpenLeft);
		}else{
			body.removeClass(pushyOpenRight);
		}

		pushy.removeClass('active');
		body.removeClass(devBodyClass);
	}

	function openPushyFallback(currentButton) {

		getPushyMenuTarget(currentButton);
		getDevBodyClasses(currentButton);

		//animate menu position based on CSS class
		if( pushy.hasClass(pushyLeft) ){
			body.addClass(pushyOpenLeft);
			pushy.animate({left: "0px"}, menuSpeed);
			container.animate({left: menuWidth}, menuSpeed);
			//css class to add pushy capability
			push.animate({left: menuWidth}, menuSpeed);
		}else{
			body.addClass(pushyOpenRight);
			pushy.animate({right: '0px'}, menuSpeed);
			container.animate({right: menuWidth}, menuSpeed);
			push.animate({right: menuWidth}, menuSpeed);
		}

		pushy.addClass('active');
		body.addClass(devBodyClass);

		//focus on link in menu
		if(menuLinkFocus){
			menuLinkFocus.trigger('focus');
		}
	}

	function closePushyFallback(currentButton){

		getPushyMenuTarget(currentButton);
		getDevBodyClasses(currentButton);
		
		//animate menu position based on CSS class
		if( pushy.hasClass(pushyLeft) ){
			body.removeClass(pushyOpenLeft);
			pushy.animate({left: "-" + menuWidth}, menuSpeed);
			container.animate({left: "0px"}, menuSpeed);
			//css class to add pushy capability
			push.animate({left: "0px"}, menuSpeed);
		}else{
			body.removeClass(pushyOpenRight);
			pushy.animate({right: "-" + menuWidth}, menuSpeed);
			container.animate({right: "0px"}, menuSpeed);
			push.animate({right: "0px"}, menuSpeed);
		}

		pushy.removeClass('active');
		body.removeClass(devBodyClass);
	}

	function toggleSubmenu(){
		//hide submenu by default
		$(submenuClass).addClass(submenuClosedClass);

		$(submenuClass).on('click', function(e){
	        var selected = $(this);

	        if( selected.hasClass(submenuClosedClass) ) {
				//hide same-level opened submenus
				selected.siblings(submenuClass).addClass(submenuClosedClass).removeClass(submenuOpenClass);
	            //show submenu
				selected.removeClass(submenuClosedClass).addClass(submenuOpenClass);
	        }else{
	            //hide submenu
	            selected.addClass(submenuClosedClass).removeClass(submenuOpenClass);
			}
			// prevent event to be triggered on parent
			e.stopPropagation();
	    });
	}

	//checks if 3d transforms are supported removing the modernizr dependency
	var cssTransforms3d = (function csstransforms3d(){
		var el = document.createElement('p'),
		supported = false,
		transforms = {
		    'webkitTransform':'-webkit-transform',
		    'OTransform':'-o-transform',
		    'msTransform':'-ms-transform',
		    'MozTransform':'-moz-transform',
		    'transform':'transform'
		};

		if(document.body !== null) {
			// Add it to the body to get the computed style
			document.body.insertBefore(el, null);

			for(var t in transforms){
			    if( el.style[t] !== undefined ){
			        el.style[t] = 'translate3d(1px,1px,1px)';
			        supported = window.getComputedStyle(el).getPropertyValue(transforms[t]);
			    }
			}

			document.body.removeChild(el);

			return (supported !== undefined && supported.length > 0 && supported !== "none");
		}else{
			return false;
		}
	})();

	if(cssTransforms3d){
		//toggle submenu
		toggleSubmenu();

		//toggle menu
		menuBtn.on('click', function(e){
			e.preventDefault();
			lastButtonPressed = $(this);
			
			togglePushy(lastButtonPressed);
		});
		//close menu when clicking site overlay
		siteOverlay.on('click', function() {
			togglePushy(lastButtonPressed);
		});
	}else{
		//add css class to body
		body.addClass('no-csstransforms3d');

		//hide menu by default
		if( pushy.hasClass(pushyLeft) ){
			pushy.css({left: "-" + menuWidth});
		}else{
			pushy.css({right: "-" + menuWidth});
		}

		//fixes IE scrollbar issue
		container.css({"overflow-x": "hidden"});

		//keep track of menu state (open/close)
		var opened = false;

		//toggle submenu
		toggleSubmenu();

		//toggle menu
		menuBtn.on('click', function(e) {
			e.preventDefault();
			lastButtonPressed = $(this);

			if (opened) {
				closePushyFallback(lastButtonPressed);
				opened = false;
			} else {
				openPushyFallback(lastButtonPressed);
				opened = true;
			}
		});

		//close menu when clicking site overlay
		siteOverlay.on('click', function(){
			if (opened) {
				closePushyFallback(lastButtonPressed);
				opened = false;
			} else {
				openPushyFallback(lastButtonPressed);
				opened = true;
			}
		});
	}
}(jQuery));
