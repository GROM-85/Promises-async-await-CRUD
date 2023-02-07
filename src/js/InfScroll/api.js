import { Notify } from "notiflix";
import { unsplashApi } from "./fetchAPI";
import * as render from "./render";

export const refs = {
    form: document.querySelector('.js-search-form'),
    list: document.querySelector('.js-gallery'),
    loadMoreBtn: document.querySelector(".js-load-more")
}

const {form ,list} = refs;
const apiFetch = new unsplashApi();
// init observer
const lastCardObserver = new IntersectionObserver((entries,observer) => {
    console.log(entries[0])
    const lastElem = entries[0];
    if(!lastElem.isIntersecting)return;
    
    observer.unobserve(entries[0].target);
    uploadMarkup();
    
    
},{
    threshold:0.5,
})

const handleForm = (e) =>{
    e.preventDefault();
    const {query} = e.currentTarget.elements;
    if(query.value.trim() === "") {
        Notify.warning("Enter some data!")
        return;
    }
    render.clearContent();
    apiFetch.resetPage();
    apiFetch.query = query.value.trim();
    uploadMarkup();
    e.currentTarget.reset();
}

form.addEventListener("submit",handleForm);

async function uploadMarkup(){
    try {
        const {results,total_pages} = await apiFetch.getData();
        const markup = render.renderMaprkup(results);
        render.infScrollLoad(total_pages,apiFetch.page,markup);

        const lastCard = refs.list.lastElementChild; // reassign lastCard for observer
        if(lastCard){
            lastCardObserver.observe(lastCard);
        }

    } catch (error) {
        Notify.failure(error.message);
    }  
}




