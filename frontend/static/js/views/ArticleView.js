import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params); 
        this.setTitle('Article');
    }

    async getHtml() {
        const id = this.params.id; 

        async function getData(url) {
            const response = await fetch(url); 
            return response.json(); 
        }

        const data = await getData('/static/js/views/articles.json');
        
        const dataNews = data['news']; 

        const article = dataNews.find(item => item.id === id); 

        return `
            <h1>` + article.title + `</h1>
            <h2>` + article.author + ` | ` + article.published.substring(0, 10) + `</h2>
            <div class="category">` + article.category + `</div>
            <img src="` + article.image + `" alt="" class="image">
            <p>` + article.description + ` Read more <em><a href="` + article.url + `">here</a><em></p>`; 
    }
}