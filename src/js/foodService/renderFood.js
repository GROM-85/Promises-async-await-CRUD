import { refs } from "./foodService";

export function renderMarkup(meals){
    return meals.map(({strMeal,strMealThumb,idMeal})=>{
        return `<li class="meal__card" id="${idMeal}">
        <img class="meal__pic" src="${strMealThumb}" alt="${strMeal}" />
        <p class="meal__desc">${strMeal}</p>
        </div>
      </li>`
    }).join("");
}

export function renderRandom(items){
    return items.map(({meals})=>{
        return `<li class="meal__card" id="${meals[0].idMeal}">
        <img class="meal__pic" src="${meals[0].strMealThumb}" alt="${meals[0].strMeal}" />
        <p class="meal__desc">${meals[0].strMeal}</p>
        </div>
      </li>`
    }).join("");
}

export function clearContent(){
    refs.gallery.innerHTML = "";
}

export function loadContent(total_pages,currPage,markup){
    refs.gallery.insertAdjacentHTML("beforeend",markup);
    console.log(total_pages)
    console.log(currPage)
    if(total_pages <= currPage){
        refs.loadMoreBtn.classList.add("is-hidden");
        return;
    }
    refs.loadMoreBtn.classList.remove("is-hidden");
}