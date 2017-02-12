import _ from 'lodash';
import 'classlist-polyfill';
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
        this.container = document.querySelector(selector);
        this.items = this.container.querySelectorAll('.item');
        this.items[0].classList.add('active');
        // Total width is set, fade in the elements
        _.each(this.items, (node) => node.classList.add('loaded'));
        // Start autoplay if necessary
        this.autoplay();
    }
    // Switches to the next element
    next() {
        // Remove active class from each element add add it to the active one
        let currentElement = this.items[this.page - 1];
        let nextPage = this.page >= this.items.length ? 1 : this.page + 1;
        let nextElement = this.items[nextPage - 1];
        _.each(this.items, (item) => item.classList.remove('active'));
        // TODO: Play animations
        switch (this.options['animation']) {
            default:
                currentElement.style.display = 'none';
                nextElement.style.display = 'block;';
                break;
        }
        // Add active class to thea ctive element
        nextElement.classList.add('active');
        // Initialize nex tick of the autoplay
        this.autoplay();
        this.page = nextPage;
    }
    // Swtiches to the previous element
    previous() {
    }
    // Gets the current page displayed on the slider
    getPage() {
        return this.page;
    }
    // Initializes the next tick of the autoplay
    autoplay() {
        if (this.options['autoplay'].enabled) {
            return;
        }
        // Stop already existing tick if necessary
        if (this.intervalId > 0) {
            clearTimeout(this.intervalId);
        }
        this.intervalId = setTimeout(() => this.next(), this.options['autoplay'].speed);
    }
    // Animates a selected element out
    animateOut(item) {
    }
    // Animates a selected element in
    animateIn(item) {
    }
}
