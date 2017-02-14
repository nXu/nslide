import _ from 'lodash';
import 'classlist-polyfill';

export default class NSlide 
{
    readonly defaults = {
        animation: false,
        dots: true,
        nav: true,
        autoplay: 5000
    };

    private page: number = 1; 

    private container;

    private items;

    private intervalId;

    // Initializes a new instance of the NSlide class
    public constructor (selector: string, private options: Object) {
        // Initialize options
        this.options = _.merge(this.defaults, options);

        // Load the dom element and set the total width
        this.container = <HTMLElement>document.querySelector(selector);
        this.items = this.container.querySelectorAll('.item');
        this.items[0].classList.add('active');
    
        // Total width is set, fade in the elements
        _.each(this.items, (node) => node.classList.add('loaded'));

        // Display first page
        this.showPage(1);
    }

    // Switches to the next element
    public next() {
        let nextPage = this.page >= this.items.length ? 1 : this.page + 1;
        this.showPage(nextPage);
    }

    // Swtiches to the previous element
    public previous() {
        let nextPage = this.page <= 1 ? this.items.length : this.page - 1;
        this.showPage(nextPage);
    }
    
    // Gets the current page displayed on the slider
    public getPage() {
        return this.page;
    }

    // Displays a selected page
    public showPage(page) {
        let currentElement = this.items[this.page - 1];
        let nextElement = this.items[page - 1];

        _.each(this.items, (item) => item.classList.remove('active'));

        this.animateOut(currentElement);
        this.animateIn(nextElement);

        nextElement.classList.add('active');

        // Initialize next tick of the autoplay
        this.autoplay();

        this.page = page;
    }

    // Initializes the next tick of the autoplay
    private autoplay() {
        if (! this.options['autoplay']) {
            return;
        }

        // Stop already existing tick if necessary
        if (this.intervalId > 0) {
            clearTimeout(this.intervalId);
        }

        this.intervalId = setTimeout(() => this.next(), this.options['autoplay']);
    }

    // Animates a selected element out
    protected animateOut(item) {
        switch (this.options['animation']) {
            default:
                item.style.display = 'none';            
                break;
        }
    }

    // Animates a selected element in
    protected animateIn(item) {
        switch (this.options['animation']) {
            default:
                item.style.display = 'block';
                break;
        }
    }
}	
