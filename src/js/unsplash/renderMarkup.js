import { refs } from "./unsplash";

export function renderMaprkup({results}){
    return results.map(({urls,alt_description}) => {
        return `<li class="gallery__item">
        <img src="${urls.small}" alt="${alt_description}" class="gallery-img">
    </li>`
    }).join("");
}

export function clearContent(){
    refs.gallery.innerHTML = "";
}

export function  uploadImages(totalPages,currPage,markup){
    
    refs.gallery.insertAdjacentHTML("beforeend",markup);
    if(currPage > totalPages){ 
        refs.loadMoreBtn.classList.add("is-hidden");
        return;
    }
    refs.loadMoreBtn.classList.remove("is-hidden");
}