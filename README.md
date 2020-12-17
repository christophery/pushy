# Pushy

Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions. This project was inspired by the off-canvas navigation menu seen on [Medium](https://medium.com/).

Pushy has been implemented on many sites, [check them out!](https://github.com/christophery/pushy#sites-using-pushy) Feel free to [let me know](http://www.twitter.com/cmyee) if you use Pushy in one of your websites.

Pushy has been featured on the [Treehouse Show](https://teamtreehouse.com/library/episode-118-page-transitions-designing-for-thumbs-concise) and in a [book](https://books.google.ca/books?id=guZjBAAAQBAJ&pg=PA103&lpg=PA103&dq=christopheryee.ca/pushy&source=bl&ots=1x-sSNmTHD&sig=ACfU3U1sFn-MU9bs3ia1UU0d9aNga5rB6w&hl=en&sa=X&ved=2ahUKEwi5wfKP9tnhAhUJbKwKHdbfBXAQ6AEwBnoECAoQAQ#v=onepage&q&f=false)!

[View Demo](https://chrisyee.ca/pushy) | [Sites using Pushy](https://github.com/christophery/pushy#sites-using-pushy)

## Features

- Uses CSS transforms & transitions.
- Smooth performance on mobile devices.
- jQuery animation fallback for IE 7 - 9.
- Menu closes when a link is selected.
- Menu closes when the site overlay is selected.
- Auto-collapsible submenus.
- Left or right menu position.
- It's responsive!

## Requirements

- [jQuery 3.x+](https://jquery.com/)

## Install

Download the [latest release](https://github.com/christophery/pushy/releases), this includes everything you need to get Pushy running on your site.

1. Add the stylesheet (`pushy.css`) in your head and the JS (`pushy.min.js`) file in your footer.

2. If you are using submenus, then you'll need to add the ```arrow.svg``` file into your `img` directory (optional).

3. Insert the following markup into your body.

```html
<!-- Pushy Menu -->
<nav class="pushy pushy-left">
    <div class="pushy-content">
        <ul>
            <!-- Submenu -->
            <li class="pushy-submenu">
                <button>Submenu</button>
                <ul>
                    <li class="pushy-link"><a href="#">Item 1</a></li>
                    <li class="pushy-link"><a href="#">Item 2</a></li>
                    <li class="pushy-link"><a href="#">Item 3</a></li>
                </ul>
            </li>
            <li class="pushy-link"><a href="#">Item 1</a></li>
            <li class="pushy-link"><a href="#">Item 2</a></li>
        </ul>
    </div>
</nav>

<!-- Site Overlay -->
<div class="site-overlay"></div>

<!-- Your Content -->
<div id="container">
    <!-- Menu Button -->
    <button class="menu-btn">&#9776; Menu</button>
</div>
```

## Development
Pushy CSS and JS are compiled and minified using Grunt. You'll need [Node](https://nodejs.org/en/) and [Grunt](https://gruntjs.com/) installed globally.

**From the root directory run:**

```
$ npm install
$ grunt
```

Now you can edit files in `/scss/` and `/js/`, which will be compiled to `/css/pushy.css` and `/js/pushy.min.js` automatically.

## CDN

Link directly to Pushy files on [cdnjs](https://cdnjs.com/libraries/pushy).


## NPM

If your are comfortable with command line, you can install Pushy as a [NPM package](https://www.npmjs.com/package/@cmyee/pushy):

```
npm install @cmyee/pushy
```

## Options

### Menu Position

Use the ```.pushy-left``` or ```.pushy-right``` CSS class to specify the menu position.

```html
<!-- Pushy will transition from the right -->
<nav class="pushy pushy-right">
    <div class="pushy-content">
        <ul>
            <li class="pushy-link"><a href="#">Item 1</a></li>
            <li class="pushy-link"><a href="#">Item 2</a></li>
        </ul>
    </div>
</nav>
```

### data-focus

Use the `data-focus` attribute to give focus to a link when the menu is opened. Ideally the first link of the menu should be focused.

This data attribute accepts a CSS selector.

```html
<nav class="pushy pushy-left" data-focus="#home-link">
    <div class="pushy-content">
        <ul>
            <li id="home-page" class="pushy-link"><a href="#">Home</a></li>
            <li class="pushy-link"><a href="#">About Us</a></li>
            <li class="pushy-link"><a href="#">Contact</a></li>
        </ul>
    </div>
</nav>
```

### data-menu-btn-class

Use the `data-menu-btn-class` attribute to change the menu button CSS class for toggling the menu.

By default Pushy will use `.menu-btn` to toggle the menu.

This data attribute accepts a CSS selector.

```html
<!-- Pushy Menu -->
<nav class="pushy pushy-left" data-menu-btn-class=".my-menu-btn">
	<!-- I've removed the inner markup for brevity -->
</nav>

<!-- Menu Button-->
<button class="my-menu-btn">Menu</button>
```

### data-container-selector

Use the `data-container-selector` attribute to using a custom `#container` selector.

If you use a custom `#container` selector you'll need to update the necessary CSS in `pushy.scss`.

This data attribute accepts a CSS selector.

```
<nav class="pushy pushy-right" data-container-selector="#custom-container">
```

## Tips

- Use the ```.push``` CSS class on HTML elements outside of the ```#container```.

```html
<header class="push">
    <h1>This is a Heading</h1>
    <h2>This is a subheading</h2>
</header>

<!-- Your Content -->
<div id="container"></div>
```

- If you are using SCSS, you can easily change the menu width by adjusting the ```$menu_width``` variable. The SCSS file [will need to be compiled](http://sass-lang.com/install) to CSS in order to see the change.

```css
$menu_width: 400px;

```

- Not using SCSS? You'll have to update the multiple values (or do a find a replace!) in the ```pushy.css``` file.

```css

.pushy{
    width: 400px; /* Changed the width to 400px */
}

.pushy-left{
    transform: translate3d(-400px,0,0); /* Updated the values */
    /* Don't forget the vendor prefixes */
}

.pushy-open-left #container,
.pushy-open-left .push {
    transform: translate3d(400px, 0, 0); /* Updated the values */
}

.pushy-right {
    transform: translate3d(400px, 0, 0); /* Updated the values */
    /* Don't forget the vendor prefixes */
}

.pushy-open-right #container,
.pushy-open-right .push {
    transform: translate3d(-400px, 0, 0); /* Updated the values */
    /* Don't forget the vendor prefixes */
}

```

- Only links with the CSS class of ```pushy-link``` will close the menu.

```html
<nav class="pushy pushy-left">
    <div class="pushy-content">
        <ul>
            <!-- This link will close the menu -->
            <li class="pushy-link"><a href="#">Item 1</a></li>
            <!-- This link won't close the menu -->
            <li><a href="#">Item 2</a></li>
        </ul>
    </div>
</nav>
```

- If you want to prevent scrolling of your site when Pushy is open just add overflow-x: hidden and height: 100% to both the html & body tags.

```css
html, body{
    overflow-x: hidden;
    height: 100%;
    -webkit-overflow-scrolling: touch;
}
```

## Browser Compatibility

| Desktop       | Mobile                                     |
| ------------- | -------------------------------------------|
| IE 9-11       | Chrome (Android)                           |
| MS Edge       | Safari (iOS)                               |
| Chrome        |                              
| Firefox       | 
| Safari (Mac)  |

## Version History

1.4.0

- Added the `data-container-selector` attribute [#133](https://github.com/christophery/pushy/pull/133).
- Updated deprecated event handlers.
- jQuery 3.x support.

1.3.0

- Added the `data-menu-btn-class` attribute [#131](https://github.com/christophery/pushy/issues/131)
- Updated README.md with Development, NPM and Options sections.

1.2.0

- Added support for a 3rd level submenu [#129](https://github.com/christophery/pushy/pull/129)
- Removed bower.json
- Updated demo

1.1.2

- Fixed formatting issues in README.md
- Added repository + license to package.json

1.1.1

- Published package to NPM.
- Removed Bower support.
- Updated demo & personal site links.

1.1.0

- Accessiblity (a11y) enhancements:
   - Can access and use menu with keyboard navigation.
   - Can use the escape key to close the menu when opened.
   - Changed the empty submenu links to buttons.
   - Added `data-focus` attribute to allow user to specify a link to focus on when menu is opened.
   - Added `.pushy-content` element to menu structure (fixes visibility flickering).
   - Changed `.menu-btn` div to button.

- Removed some redundant CSS classes from `pushy.css`.
- Removed `toggleSubmenuFallback` function, older browsers will use `toggleSubmenu` instead.
- Fixed issue #88

1.0.0

- Added auto-collapsable submenus.
- Added ```.pushy-right``` CSS class for right sided menu position.
- Added SCSS files.
- Added menu width SCSS variable.
- Updated click event listeners.
- Updated demo file.
- Updated browser compatibility.
- Removed unneeded CSS browser prefixes.
- Consolidated menu state CSS classes.
- Fixed brief menu visibility.

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
- Fixed horizontal scroll bar issue on mobile devices
- Disabled webkit tap highlight
- Rejiggered the JS file
- Updated to jQuery 1.10.1
- Updated the demo file

0.8.4

- Fixed performance issue with mobile devices
- Updated to jQuery 1.10
- Updated the demo file
- Updated the read me

## Sites using Pushy

Pushy has been implemented on many sites in the wild, check them out:

- [Lela Design](http://leladesign.hr/) by [@div3rDesign](https://twitter.com/div3rDesign)
- [emota](http://www.emota.com) by [@YayRomina](https://twitter.com/YayRomina)
- [Selby College](http://www.selby.ac.uk/) by [@welcomebrand](https://twitter.com/welcomebrand)
- [Bentleys Estate and Lettings Agents](http://www.bentleysestateagents.co.uk/) by [@WolfHook](https://twitter.com/WolfHook)
- [Firefox OS Devices](https://firefoxosdevices.org/) by [@s_hentzschel](https://twitter.com/s_hentzschel)
- [FulcrumTech](http://www.fulcrumtech.net/) by [@maxlapides](https://twitter.com/maxlapides)
- [The Black and Blue](http://www.theblackandblue.com/) by [@evanluzi](https://github.com/evanluzi)

**Note:** You may have to resize your browser on some sites to see Pushy in action.

To add your site, tweet to me [@cmyee](https://twitter.com/cmyee).

## Thanks to

- [HTML5 Boilerplate](http://html5boilerplate.com/)
- [jQuery](http://jquery.com/)
