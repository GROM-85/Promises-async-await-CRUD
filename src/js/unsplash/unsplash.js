import { unsplashAPI } from "./unsplashAPI";
import { renderMaprkup,clearContent,uploadImages } from "./renderMarkup";

export const refs = {
    form: document.querySelector(".js-search-form"),
    loadMoreBtn: document.querySelector(".js-load-more"),
    gallery: document.querySelector(".js-gallery"),
}
const fetchApi = new unsplashAPI();

async function formHandler(event){
        event.preventDefault();
        const {query} = event.currentTarget.elements;
        if(query.value === "") return;

        try{
            fetchApi.query = query.value.trim();
            fetchApi.resetPage();
            clearContent();
            const data = await fetchApi.getData();
            const {total_pages} = data;
            const markup = renderMaprkup(data);
            uploadImages(total_pages,fetchApi.page,markup);
        }
        catch(error){
            console.log(error)
        }
        finally{
            refs.form.reset();
        }      
}

async function loadMoreHandler(){
    try{
        const data = await fetchApi.getData();
        const {total_pages} = data;
        const markup = renderMaprkup(data);
        uploadImages(total_pages,fetchApi.page,markup);
    }
    catch(error){
        console.log(error)
    }
}
refs.form.addEventListener("submit",formHandler);
refs.loadMoreBtn.addEventListener("click",loadMoreHandler)