import Accueil from './views/Accueil.js'; 
import Contact from './views/Contact.js'; 
import About from './views/About.js'; 
import ArticleView from './views/ArticleView.js'; 

const pathToRegex = path => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$'); 

const getParams = match => {
    const values = match.result.slice(1); 
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]); 

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]]; 
    }))
}

const router = async () => {
    const routes = [
        {path: '/', view: Accueil},
        {path: '/contact', view: Contact},
        {path: '/article-view/:id', view: ArticleView},
        {path: '/about', view: About}
    ]

    const potentialMatches = routes.map(route => {
        return {
            route: route, 
            result: location.pathname.match(pathToRegex(route.path))
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null)

    if (!match) {
        match = {
            route: routes[0], 
            result: [location.pathname]
        }
    }

    const view = new match.route.view(getParams(match)); 

    document.querySelector('#app').innerHTML = await view.getHtml(); 
}

const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault(); 
            navigateTo(e.target.href); 
        }
    })
    router(); 
})