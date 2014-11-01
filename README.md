#Pushy

Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions. This project was inspired by the off-canvas navigation menu seen on [Medium](https://medium.com/).

Pushy has been implemented on many sites, [check them out!](https://github.com/christophery/pushy#sites-using-pushy) Feel free to [let me know](http://www.twitter.com/cmyee) if you use Pushy in one of your websites.

[View Demo](http://www.christopheryee.ca/pushy) | [WordPress Theme](https://github.com/christophery/pushypress)

##Features

- Uses CSS transforms & transitions.
- Smooth performance on mobile devices.
- jQuery animation fallback for IE 7 - 9.
- Menu closes when a link is selected.
- Menu closes when the site overlay is selected.
- It's responsive!

##Requirements

- [jQuery 1.9+](http://jquery.com/)

##Install

Download the [packaged source file](https://github.com/christophery/pushy/archive/master.zip), this includes everything you need to get Pushy running on your site.

1. Add the stylesheet (pushy.css) in your head and the JS (pushy.min.js) file in your footer.

2. Insert the following markup into your body.

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
<div id="container">
    <!-- Menu Button -->
    <div class="menu-btn">&#9776; Menu</div>
</div>
```

##Bower

If your are comfortable with command line, you can install Pushy as a [Bower](http://bower.io/) package:

```
bower install pushy
```

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

- If you want to prevent scrolling of your site when Pushy is open just add overflow-x: hidden and height: 100% to both the html & body tags.

```css
html, body{
    overflow-x: hidden;
    height: 100%;
}
```

##Browser Compatibility

| Desktop       | Mobile                                     |
| ------------- | -------------------------------------------|
| IE 9-11       | Chrome (Android 4.x+)                      |
| Chrome        | Android Browser (Android 4.x+)             |
| Firefox       | Safari (iOS 7)                             |
| Safari (Mac)  | Internet Explorer Mobile (Windows Phone 8) |

##Version History

0.9.2

- Removed modernizr dependency.
- Updated site overlay with color + smoother transition.
- Cleaned up the CSS a bit.
- Dropped support for IE 7 & 8.

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

##Sites using Pushy

Pushy has been implemented on many sites in the wild, check them out:

- [Nordic Kaluste](http://www.nordickaluste.fi/) by [Joonas Sippola](http://www.joonassippola.fi/)
- [Bentleys Estate and Lettings Agents](http://www.bentleysestateagents.co.uk/) by [@WolfHook](https://twitter.com/WolfHook)
- [Alpha](http://christopheryee.ca/ghost/alpha/) by [Christopher Yee](https://creativemarket.com/cmyee/100484-Alpha)
- [Firefox OS Devices](https://firefoxosdevices.org/) by [@s_hentzschel](https://twitter.com/s_hentzschel)
- [Peter Tóth](http://www.petertoth.me/) by [@yednorozec](https://twitter.com/yednorozec)
- [FulcrumTech](http://www.fulcrumtech.net/) by [@maxlapides](https://twitter.com/maxlapides)
- [Organized Interiors](http://www.organizedinteriors.com/) by [@bombippy](https://twitter.com/bombippy)
- [Developer Essentials](http://devessentials.net/) by [@dev_essentials](https://twitter.com/dev_essentials)
- [The Black and Blue](http://www.theblackandblue.com/) by [@evanluzi](https://github.com/evanluzi)
- [Echo](http://christopheryee.ca/ghost/echo/) by [Christopher Yee](https://creativemarket.com/cmyee/24881-Echo)
- [Mochi](http://christopheryee.ca/ghost/mochi/) by [Christopher Yee](http://themeforest.net/item/mochi-responsive-theme-for-ghost/6674078)

**Note:** You may have to resize your browser on some sites to see Pushy in action.

To add your site, tweet to me [@cmyee](https://twitter.com/cmyee).

##Thanks to

- [HTML5 Boilerplate](http://html5boilerplate.com/)
- [jQuery](http://jquery.com/)
