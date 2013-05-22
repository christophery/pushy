/*! Pushy - v0.6 - 2013-5-22
* https://github.com/christophery/pushy/
* by Christopher Yee */

var pushy = $('.pushy'),
	container = $('#container'),
	menuBtn = $('.menu-btn, .pushy a'),
	menuSpeed = 200; //jQuery fallback menu speed

if(!Modernizr.csstransforms3d){
	//Browser doesn't support CSS 3D Transforms, fallback to jQuery	
	
	pushy.css({left: "-200px"}); //Hide menu by default
	container.css({"overflow-x": "hidden"});

	//Keep track of menu state (open/close)
	var state = true;

	//Toggle menu
	menuBtn.click(function() {
		if (state) {
			pushy.animate({left: "0px"}, menuSpeed);
			container.animate({left: "200px"}, menuSpeed);
			state = false;
		} else {
			pushy.animate({left: "-200px"}, menuSpeed);
			container.animate({left: "0px"}, menuSpeed);
			state = true;
		}
	});

}else{
	//Use native CSS 3D Transforms
	menuBtn.click(function () {
		pushy.toggleClass("pushy-menu-left pushy-menu-open");
		container.toggleClass("container-push");
	});
}