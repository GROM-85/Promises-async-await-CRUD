import { FoodApi } from "./foodServAPI";
import * as render from "./renderFood";

export const refs = {
    form: document.querySelector(".js-search-form"),
    loadMoreBtn: document.querySelector(".js-load-more"),
    gallery: document.querySelector(".js-meals"),
}

const foodApi = new FoodApi();

const inputHandler = async(e) =>{
    e.preventDefault();
    const {query} = e.currentTarget.elements;
    if(query.value.trim() === "") return;
    render.clearContent();

    try{
        foodApi.query = query.value.trim();
        const data = await foodApi.getData();
       
        const {meals} = data; 
        foodApi.pageReset();
        foodApi.totalPagesUpdate(meals);
        const items = foodApi.chunkOfItems();
        let markup = render.renderMarkup(items);
        render.loadContent(foodApi.totalPages,foodApi.page,markup)
        foodApi.pageUpdate();
    }catch(error){
        console.log(error)
    }
    finally{
        refs.form.reset();
    }
}

async function loadMoreHandler(){
    try{
        const items = foodApi.chunkOfItems();
        let markup = render.renderMarkup(items);
        render.loadContent(foodApi.totalPages,foodApi.page,markup)
        foodApi.pageUpdate();
    }
    catch(error){
        console.log(error)
    }
}

refs.form.addEventListener("submit",inputHandler);
refs.loadMoreBtn.addEventListener("click",loadMoreHandler);


// get some random result when page is just loaded for preview

window.addEventListener("load",() => {
    foodApi.getRandomData()
            .then((result) => {
                console.log(result)
                refs.gallery.insertAdjacentHTML("beforeend",render.renderRandom(result));
                
            });
    
})