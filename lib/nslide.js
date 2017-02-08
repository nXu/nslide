import _ from 'lodash';
export default class NSlide {
    constructor(selector, options) {
        this.selector = selector;
        this.options = options;
        this.defaults = {
            animation: false,
            dots: true,
            nav: true,
            autoplay: {
                enabled: true,
                speed: 3000
            }
        };
        this.page = 1;
        // Initialize options
        this.options = _.merge(this.defaults, options);
        // Load the dom element and set the total width
        let domElement = document.querySelector(selector);
        let pageNodes = domElement.childNodes;
        domElement.style.width = _.sumBy(pageNodes, (node) => node.offsetWidth) + 'px';
        // Total width is set, fade in the elements
        _.each(pageNodes, (node) => node.className += ' loaded');
    }
    // Gets the current page displayed on the slider
    getPage() {
        return this.page;
    }
}
