import { refs } from "./constNews";

export function clearContent(){
    refs.content.innerHTML = "";
}

export function renderMarkup({articles}){
    console.log(articles);
    return articles.map(({author,description,title,urlToImage}) => {
        return`<div>
        <h3>${title}</h3>
        <p>${author}</p>
        <p>${description}</p>
        <img width="300px" height="100px" src="${urlToImage}" alt="${title}"/>
        <button type="button">Read more</button>
      </div>`
    }).join("");
}