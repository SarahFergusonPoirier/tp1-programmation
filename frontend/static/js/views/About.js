import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('About')
    }

    async getHtml() {
        return `
            <section>
                <h1>À propos de nous</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida lacus nunc. Donec aliquam nibh dui, vitae aliquam elit rutrum non. Donec tempus, sem eu posuere lacinia, lacus odio feugiat quam, et tempor ex mauris et mi. Nunc finibus dapibus orci eget fermentum. Aenean tristique mi ut accumsan scelerisque. Ut quis lorem eget odio porttitor pellentesque ut in mauris. Praesent vel mi arcu. Vestibulum sit amet nisi vel nulla pellentesque finibus. Suspendisse eu ipsum purus. Aenean sodales nibh mauris, nec pulvinar nisi vehicula quis.</p>
                <p>Nunc at augue maximus, aliquam augue rhoncus, venenatis diam. Pellentesque dignissim tellus at risus blandit, sed feugiat ipsum porttitor. Vestibulum interdum libero sagittis, semper ligula id, vehicula felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ex lorem, elementum accumsan elementum sit amet, elementum sit amet tortor. Pellentesque ornare augue ut rutrum consectetur. Nullam id consequat mi, a ultricies ex.</p>
                <p>In varius sit amet nisl nec tincidunt. Integer bibendum a purus a finibus. Quisque at luctus metus. Nullam semper tristique libero dapibus ornare. Integer eu ante nunc. Nullam iaculis neque nec nisl volutpat commodo. Aenean at laoreet tortor. Nullam id purus vel urna facilisis mollis.</p>
            </section>
            `;
    }
}