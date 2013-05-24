/*! Pushy - v0.8.3 - 2013-5-24
* Pushy is an off-canvas navigation menu for your website.
* https://github.com/christophery/pushy/
* by Christopher Yee */

var pushy = $('.pushy'), //menu css class
	container = $('#container'), //container css class
	pushyClass = "pushy-left pushy-open", //menu position & menu open class
	containerClass = "container-push", //container open class
	menuBtn = $('.menu-btn, .pushy a'), //css classes to toggle the menu
	menuSpeed = 200, //jQuery fallback menu speed
	menuWidth = pushy.width() + "px"; //jQuery fallback menu width

if(!Modernizr.csstransforms3d){
	//jQuery fallback (no 3D transforms support)
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

}else{
	//use native CSS 3D Transforms
	menuBtn.click(function () {
		pushy.toggleClass(pushyClass);
		container.toggleClass(containerClass);
	});
}