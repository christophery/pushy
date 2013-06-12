/*! Pushy - v0.8.4 - 2013-6-1
* Pushy is an off-canvas navigation menu for your website.
* https://github.com/christophery/pushy/
* by Christopher Yee */

$(function() {
	var pushy = $('.pushy'), //menu css class
		container = $('#container'), //container css class
		pushyClass = "pushy-left pushy-open", //menu position & menu open class
		containerClass = "container-push", //container open class
		menuBtn = $('.menu-btn, .pushy a, .site-overlay'), //css classes to toggle the menu
		menuSpeed = 200, //jQuery fallback menu speed
		menuWidth = pushy.width() + "px"; //jQuery fallback menu width

	if(Modernizr.csstransforms3d){
		pushy.after('<div class="site-overlay"></div>'); //add site overlay
		menuBtn.click(function() {
			$('body').toggleClass('pushy-open').css({"overflow": "hidden"}); //toggle site overlay + disable scrolbars
			pushy.toggleClass(pushyClass);
			container.toggleClass(containerClass);
		});
		$('.site-overlay').click(function(){ //close menu when clicking site overlay
			$('body').toggleClass('pushy-open').css({"overflow": "visible"}); //toggle site overlay + restore scrollbars
			//pushy.toggleClass(pushyClass);
			//container.toggleClass(containerClass);
		});
	}else{
		//jQuery fallback
		pushy.css({left: "-" + menuWidth}); //hide menu by default
		container.css({"overflow-x": "hidden"}); //fixes IE issue

		//keep track of menu state (open/close)
		var state = true;

		//toggle menu
		menuBtn.click(function() {
			if (state) {
				pushy.animate({left: "0px"}, menuSpeed);
				container.animate({left: menuWidth}, menuSpeed);
				state = false;
			} else {
				pushy.animate({left: "-" + menuWidth}, menuSpeed);
				container.animate({left: "0px"}, menuSpeed);
				state = true;
			}
		});
	}
});