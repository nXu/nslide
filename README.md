# NSlide
A minimalistic, opinionated banner slider.

## Installation
`npm install --save nslide`

or 

`yarn add nslide`

## Usage

### HTML
Basically just use a container element, add `nslide` class to it, and add children with `item` classes.

```html
    <div id="nslide" class="nslide">
        <div class="item">
            <img src="http://lorempixel.com/1920/600" alt="Image 1">
        </div>
        <div class="item">
            <img src="http://lorempixel.com/1920/600" alt="Image 2">
        </div>
        <div class="item">
            <img src="http://lorempixel.com/1920/600" alt="Image 3">
        </div>
    </div>

```

### Javascript
```js
import NSlide from 'nslide';

let slider = new NSlide('#nslide');
```

## Options
You can pass a Javascript object containing options as a second parameter to the
NSlide constructor. The following example represents the default configuration
of the slider:

```js
let slider = new NSlide('#nslide', {
    animation: false,
    dots: true,
    nav: true,
    autoplay: 5000
});
```

- Animation is coming soon. Default is false
- Dots: whether to display navigation dots
- Nav: whether to display navigation buttons
- Autoplay: time in miliseconds between changes. Setting it to `false` disables autoplay

## Methods
- `slider.next()`:  Displays the next item
- `slider.previous()`: Displays the previous item
- `slider.getPage()`: Gets the current page. *Page numbering is always 1-based*
- `slider.showPage(page)`: Displays a selected page

## Development, contribution
For development, clone the repo and edit the files in the `src` folder. 

### Build
The Javascript code is written in Typescript. You need `typescript` to compile the source.
Demo files in the demo folder are bundled with webpack. All the required build tools are 
listed under devDependencies: `npm install` or `yarn install` will install all required
modules.

- To build the source in the `dist/` folder, just run `npm run build`
- To build and bundle demo files to the `demo/` folder, run `npm run demo`

### Contribution
If you discover a bug in NSlide, please open an issue on Github. If you are able to, feel
free to send bugfixes in PR.

If you feel like implementing a new feature, please contact me or open an issue first. 
I would like to have as few features as possible.

## License
NSlide is licensed under WTFPL: DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE.