import AbstractView from './AbstractView.js'; 

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Accueil');
    }

    async getHtml() {
        async function getData(url) {
            const response = await fetch(url)
            return response.json()
        }

        const data = await getData('/static/js/views/articles.json');

        const dataNews = data['news'];  

        let listArticles = '<section>'; 
        for (let i in dataNews) {
            listArticles += `
                <article>
                    <a href="/article-view/` + dataNews[i]['id'] + `">
                        <img src="` + dataNews[i]['image'] + `" alt="">
                        <h3>` + dataNews[i]['title'] + `</h3>
                        <p>` + dataNews[i]['description'].substring(0, 100) + `...</p>
                    </a>
                </article>
            `;
        }
        listArticles += '</section>';
        return listArticles; 
    }
}