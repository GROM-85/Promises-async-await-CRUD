// TODO:
//1
//2
//3

import { newsAPI } from "./newsAPi";
import { refs,BASE_URL,options } from "./constNews";
import { renderMarkup ,clearContent} from "./render";
const fetchApi = new newsAPI({url:BASE_URL})

async function searchHandler(){
    options.q = refs.input.value.trim();
    if(options.q === "") return;

    try{
        updateOptions();
        const data = await fetchApi.getData(options);
        refs.content.insertAdjacentHTML("beforeend",renderMarkup(data))
    }
    catch(error){
        console.log(error);
    }
    finally{
        refs.input.value = "";
    }

} 

function updateOptions(){
    options.pageSize = refs.perPage.value;
    options.searchIn = refs.searchIn.value;
    options.sortBy = refs.sortBy.value;
}

refs.searchBtn.addEventListener("click",searchHandler)
refs.input.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        searchHandler();
    }
})

