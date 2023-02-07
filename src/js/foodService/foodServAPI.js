import { previousDay } from "date-fns";

export class FoodApi{
    #BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?";
    #RAND_URL = "https://www.themealdb.com/api/json/v1/1/random.php?";
    #query;
    #page;
    #items;
    #per_page;
    #totalPages;

    #options = {
        s:"",
    }

    constructor(){
        this.#page = 1;
        this.#query = "";
        this.#per_page = 10;
    }

    async getData(){
        Object.assign(this.#options,{
            s:this.#query
        })
        const response = await fetch(this.#BASE_URL + new URLSearchParams(this.#options));
        if(!response.ok){
            throw new Error(error);
        }
        return await response.json();
    }

    async getRandomData(){
        const promises = [];
        for(let i = 0;i < this.#per_page;i++){
            const response = fetch(this.#RAND_URL).then(res => res.json());
            promises.push(response);
        }
        return await Promise.all(promises)
    }

    pageUpdate(){
        this.#page++;
    }
    pageReset(){
        this.#page = 1;
    }
    get page(){
        return this.#page;
    }
    set page(newPage){
        this.#page = newPage;
    }
    get query(){
        return this.#query;
    }
    set query(newQuery){
        this.#query = newQuery;
    }
    get totalPages(){
        return this.#totalPages;
    }
    totalPagesUpdate(items){
        this.#items = items;
        this.#totalPages = Math.ceil(this.#items.length/this.#per_page);
    }
    chunkOfItems(){
        return this.#items.slice(this.#per_page * (this.#page - 1),this.#per_page)
    }

}