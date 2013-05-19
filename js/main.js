$("button").click(function () {
	$('.pushy').toggleClass("pushy-menu-left");
	$('.pushy').toggleClass("pushy-menu-open");
	$('#container').toggleClass("container-push");
});

$("nav a").click(function () {
	$('.pushy').toggleClass("pushy-menu-left");
	$('.pushy').toggleClass("pushy-menu-open");
	$('#container').toggleClass("container-push");
});
