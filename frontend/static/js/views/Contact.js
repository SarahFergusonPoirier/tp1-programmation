import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params)
        this.setTitle('Contact'); 
    }

    async getHtml() {
        return `
            <section>
                <h1>Contact</h1>
                <p>Sed ullamcorper sapien nec est pellentesque egestas. Donec tincidunt in massa vel consequat. Morbi in velit nunc. Cras in suscipit leo, quis condimentum nunc. Donec urna ante, ultrices sit amet odio commodo, ultrices consectetur libero. Cras augue mi, blandit et fermentum eget, feugiat in felis. Vestibulum maximus massa vel luctus interdum. Mauris porta posuere luctus. Morbi placerat congue sagittis. Sed molestie orci sit amet imperdiet venenatis. Vestibulum ut aliquam dui. Nullam imperdiet dui augue, ut bibendum risus lacinia non. Morbi ornare felis purus.</p>
                <p>Quisque id augue eu justo dapibus tempor. Nullam convallis interdum mauris, quis tristique mauris commodo a. Aenean ut vestibulum purus. Aliquam tempor elit vel aliquet egestas. Pellentesque a fermentum arcu. Sed tristique convallis libero, a facilisis dui interdum at. Nam placerat, ligula nec porttitor posuere, erat arcu finibus diam, eget imperdiet velit augue at odio. Proin eu euismod eros. Suspendisse ac gravida velit, ac fermentum risus. Integer eget lectus orci. Cras lacinia elit quis enim volutpat tincidunt. Morbi porta porta metus viverra auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis a lacus vel eros varius vestibulum. Nam vel enim varius, venenatis quam sed, sagittis purus. Quisque ac massa id libero fermentum ullamcorper.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum, odio quis pellentesque congue, neque quam fermentum felis, et tincidunt quam ipsum tempus velit. Sed ultrices pharetra aliquam. Maecenas dignissim, ipsum vel porttitor ultricies, nulla sem mattis lacus, vel vulputate erat diam vel mauris.</p>
            </section>`;
    }
}