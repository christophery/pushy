/*! Pushy - v0.9.2 - 2014-9-13
* Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.
* https://github.com/christophery/pushy/
* by Christopher Yee */

$(function() {
	var pushy = $('.pushy'), //menu css class
		body = $('body'),
		container = $('#container'), //container css class
		push = $('.push'), //css class to add pushy capability
		siteOverlay = $('.site-overlay'), //site overlay
		pushyClass = 'pushy-open', //menu position & menu open class
		pushClass = 'push-push', //css class to add pushy capability
		menuBtn = $('.menu-btn, .pushy-item'), //css classes to toggle the menu
		menuSpeed = 200, //jQuery fallback menu speed
		menuWidth = pushy.width() + 'px', //jQuery fallback menu width
		submenuClass = '.pushy-submenu',
		submenuOpenClass = 'pushy-submenu-open',
		submenuLinksClass = '.pushy-submenu ul',
		submenu = $(submenuClass);

	function togglePushy(){
		//add class to body based on menu position
		if( $('.pushy').hasClass('pushy-left') ){
			body.toggleClass('pushy-open-left');
		}else{
			body.toggleClass('pushy-open-right');
		}

		siteOverlay.toggleClass(pushyClass); //toggle site overlay
		pushy.toggleClass(pushyClass);
		push.toggleClass(pushClass); //css class to add pushy capability
	}

	//submenu
	submenu.children('a').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass(submenuOpenClass)
			   .next(submenuLinksClass).slideToggle(200)
			   .end().parent(submenuClass)
			   .siblings(submenuClass).children('a')
			   .removeClass(submenuOpenClass)
			   .next(submenuLinksClass).slideUp(200);
	});

	function openPushyFallback(){
		//add site overlay
		siteOverlay.addClass(pushyClass);
		
		//animate menu position based on CSS class
		if( $('.pushy').hasClass('pushy-left') ){
			pushy.animate({left: "0px"}, menuSpeed);
			container.animate({left: menuWidth}, menuSpeed);
			//css class to add pushy capability
			push.animate({left: menuWidth}, menuSpeed);
		}else{
			pushy.animate({right: '0px'}, menuSpeed);
			container.animate({right: menuWidth}, menuSpeed);
			push.animate({right: menuWidth}, menuSpeed);
		}

	}

	function closePushyFallback(){
		//remove site overlay
		siteOverlay.removeClass(pushyClass);
		
		//animate menu position based on CSS class
		if( $('.pushy').hasClass('pushy-left') ){
			pushy.animate({left: "-" + menuWidth}, menuSpeed);
			container.animate({left: "0px"}, menuSpeed);
			//css class to add pushy capability
			push.animate({left: "0px"}, menuSpeed);
		}else{
			pushy.animate({right: "-" + menuWidth}, menuSpeed);
			container.animate({right: "0px"}, menuSpeed);
			push.animate({right: "0px"}, menuSpeed);
		}

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
	})();

	if(cssTransforms3d){
	//if(false){
		//make menu visible
		pushy.css({'visibility': 'visible'});

		//toggle menu
		menuBtn.on('click', function(){
			togglePushy();
		});
		//close menu when clicking site overlay
		siteOverlay.on('click', function(){
			togglePushy();
		});
	}else{
		//jQuery fallback

		//hide menu by default
		if( $('.pushy').hasClass('pushy-left') ){
			pushy.css({left: "-" + menuWidth});
		}else{
			pushy.css({right: "-" + menuWidth});
		}

		//make menu visible
		pushy.css({'visibility': 'visible'}); 
		//fixes IE scrollbar issue
		container.css({"overflow-x": "hidden"});

		//keep track of menu state (open/close)
		var opened = false;

		//toggle menu
		menuBtn.on('click', function(){
			if (opened) {
				closePushyFallback();
				opened = false;
			} else {
				openPushyFallback();
				opened = true;
			}
		});

		//close menu when clicking site overlay
		siteOverlay.on('click', function(){
			if (opened) {
				closePushyFallback();
				opened = false;
			} else {
				openPushyFallback();
				opened = true;
			}
		});
	}
});