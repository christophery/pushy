# Pushy

Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions. This project was inspired by the off-canvas navigation menu seen on [Medium](https://medium.com/).

Pushy has been implemented on many sites, [check them out!](https://chrisyee.ca/pushy/#sites-using-pushy) Feel free to [let me know](http://www.twitter.com/cmyee) if you use Pushy in one of your websites.

Pushy has been featured on the [Treehouse Show](https://teamtreehouse.com/library/episode-118-page-transitions-designing-for-thumbs-concise) and in a [book](https://books.google.ca/books?id=guZjBAAAQBAJ&pg=PA103&lpg=PA103&dq=christopheryee.ca/pushy&source=bl&ots=1x-sSNmTHD&sig=ACfU3U1sFn-MU9bs3ia1UU0d9aNga5rB6w&hl=en&sa=X&ved=2ahUKEwi5wfKP9tnhAhUJbKwKHdbfBXAQ6AEwBnoECAoQAQ#v=onepage&q&f=false)!

[View Demo](https://chrisyee.ca/pushy) | [Sites using Pushy](https://chrisyee.ca/pushy/#sites-using-pushy)

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

### data-menu-btn-selector

Use the `data-menu-btn-selector` attribute to change the menu button CSS class for toggling the menu.

By default Pushy will use `.menu-btn` to toggle the menu.

This data attribute accepts a CSS selector.

**Note:** In v1.4.0 this attribute was renamed from `data-menu-btn-class` to `data-menu-btn-selector`

```html
<!-- Pushy Menu -->
<nav class="pushy pushy-left" data-menu-btn-selector=".my-menu-btn">
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


## Sites using Pushy

Pushy has been implemented on many sites in the wild, [check them out!](https://chrisyee.ca/pushy/#sites-using-pushy)

To add your site, tweet to me [@cmyee](https://twitter.com/cmyee).

