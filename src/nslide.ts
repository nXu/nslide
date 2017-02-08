import _ from 'lodash';

export default class NSlide {
    readonly defaults = {
        animation: false,
        dots: true,
        nav: true,
        autoplay: {
            enabled: true,
            speed: 3000 
        }
    };

    private page: number = 1;

    public constructor (public selector: string, public options: Object) {
        // Initialize options
        this.options = _.merge(this.defaults, options);

        // Load the dom element and set the total width
        let domElement = <HTMLElement>document.querySelector(selector);
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
