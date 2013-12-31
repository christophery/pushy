#Pushy

Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.

Feel free to [let me know](http://www.twitter.com/cmyee) if you use Pushy in one of your websites.

[View Demo](http://www.christopheryee.ca/pushy) | [WordPress Theme](https://github.com/christophery/pushypress)

##Features

- Uses CSS transforms & transitions.
- Smooth performance on mobile devices.
- jQuery animation fallback for IE 7 - 9.
- Menu closes when a link is selected.
- Menu closes when the site overlay is selected.
- It's responsive!

##Requirements

- jQuery 1.9+
- Modernizr

##Usage

1. Include jQuery & Modernizr.

2. Add the stylesheet (pushy.css) in your head and the JS (pushy.min.js) file in your footer.

3. Insert the following markup into your body.

```html
<!-- Pushy Menu -->
<nav class="pushy pushy-left">
    <ul>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
    </ul>
</nav>

<!-- Site Overlay -->
<div class="site-overlay"></div>

<!-- Your Content -->
<div id="container"></div>
```

##Modernizr

Pushy uses Modernizr to detect & test for ```CSS 3D Transforms``` support in the browser. Be sure to include this test in you are using the [Modernizr build tool](http://modernizr.com/download/#-csstransforms3d-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load).


##Tips

- Use the ```.push``` CSS class on HTML elements outside of the ```#container```.

```html
<header class="push">
    <h1>This is a Heading</h1>
    <h2>This is a subheading</h2>
</header>

<!-- Your Content -->
<div id="container"></div>
```

- Add the following to hide horizontal scroll bars when menu is open, disable the webkit tap highlight and fix the focus scrolling in Safari.


```css
html, body{
	overflow-x: hidden; /* prevents horizontal scroll bars */
	-webkit-tap-highlight-color: rgba(0,0,0,0); /* disable webkit tap highlight */
	height: 100%; /* fixes focus scrolling in Safari (OS X) */
}
```

- If you change the width of the ```.pushy``` menu, be sure to update the values in the ```.pushy-left```and ```.container-push, .push-push``` CSS classes.

```css

.pushy{
    width: 400px; /* Changed the width to 400px */
}

.pushy-left{
    transform: translate3d(-400px,0,0); /* Updated the values */
    /* Don't forget the vendor prefixes */
}

.container-push, .push-push{
    transform: translate3d(400px,0,0); /* Updated the values */
    /* Don't forget the vendor prefixes */
}
```

##Browser Compatibility

| Desktop       | Mobile                           |
| ------------- | -------------------------------- |
| IE 7-10       | Chrome (Android 4.2.2)           |
| Chrome        | Android Browser (Android 4.2.2)  |
| Firefox       | Safari (iOS 6-7)                 |
| Safari (Mac)  |

##Version History

0.9.1

- Added support for more menu items (with scroll bar).
- Added the .push CSS class. This adds pushy support to additional HTML elements outside of the container div.
- Fixed menu transition.
- Tested in iOS 7.
- Updated the demo file.

0.9.0

- Added a site overlay when Pushy is toggled
- Fixed horizonal scroll bar issue on mobile devices
- Disabled webkit tap highlight
- Rejiggered the JS file
- Updated to jQuery 1.10.1
- Updated the demo file

0.8.4

- Fixed performance issue with mobile devices
- Updated to jQuery 1.10
- Updated the demo file
- Updated the read me

##Thanks to

- [HTML5 Boilerplate](http://html5boilerplate.com/)
- [jQuery](http://jquery.com/)
- [Modernizr](http://modernizr.com/)
