#Pushy

Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.

Feel free to [let me know](http://www.twitter.com/cmyee) if you use Pushy in one of your websites.

[View Demo](http://www.christopheryee.ca/pushy) |
[View Project on GitHub](https://github.com/christophery/pushy/)

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

1. Include jQuery & Modernizr in your head.

2. Include the Pushy stylesheet (pushy.css) in your head and the Pushy JS (pushy.min.js) file in your footer.

3. Include the following markup (menu, site overlay & container) in your body.

```html
<!-- Pushy Menu -->
<nav class="pushy pushy-left">
    <ul>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
        <li><a href="#">Item 4</a></li>
        <li><a href="#">Item 5</a></li>
        <li><a href="#">Item 6</a></li>
    </ul>
</nav>

<!-- Site Overlay -->
<div class="site-overlay"></div>

<!-- Your Content -->
<div id="container"></div>
```

##Tips

- Use the ```css push``` class on HTML elements outside of the container.

```html
<header class="push">
    <h1>This is a Heading</h1>
    <h2>This is a subheading</h2>
</header>

<!-- Your Content -->
<div id="container"></div>
```

##Browser Compatibility

Desktop

- IE 7-10
- Chrome
- Firefox
- Safari (Mac)

Mobile

- Chrome (Android 4.2.2)
- Android Browser (Android 4.2.2)
- Safari (iOS 6)

##Version History

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
