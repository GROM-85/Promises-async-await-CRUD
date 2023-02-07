import { refs } from "./api";
import { Notify } from "notiflix";

export function renderMaprkup(results){
    return results.map(({urls,alt_description}) => {
        return `<li class="gallery__item">
        <img src="${urls.small}" alt="${alt_description}" class="gallery-img">
    </li>`
    }).join("");
}

export function clearContent(){
    refs.list.innerHTML = "";
}

export function  uploadImages(totalPages,currPage,markup){
    
    refs.list.insertAdjacentHTML("beforeend",markup);
    if(currPage > totalPages){ 
        refs.loadMoreBtn.classList.add("is-hidden");
        return;
    }
    refs.loadMoreBtn.classList.remove("is-hidden");
}

export function  infScrollLoad(total_pages,currPage,markup){
    refs.list.insertAdjacentHTML("beforeend",markup);
    if(total_pages < currPage){
        Notify.info("Run out of results!");
    }
}