export class unsplashAPI{

    #BASE_URL = "https://api.unsplash.com/search/photos/?";
    #API_KEY = "dLJeZqeou3_BYhf5-_GYI9_T-1QpbbZYg0-MlkmGVyg";

    #page;
    #query;

    #options = {
        client_id: this.#API_KEY,
        query: this.#query,
        per_page: 20,
        page:this.#page,
        color:'black',
        orientation:'portrait',
    }

    constructor(){
        this.#page = 1;
        this.#query = '';
    }

    async getData(){
        // options update
        Object.assign(this.#options,{
            page:this.#page,
            query:this.#query,
        });
        const response = await fetch(this.#BASE_URL + new URLSearchParams(this.#options));
        if(!response.ok){
            throw new Error(error);
        }
        this.updatePage();
        return await response.json();
    }

    get page(){
        return this.#page;
    }
    set page(newValue){
        this.#page = newValue;
    }
    updatePage(){
        this.#page++;
    }
    resetPage(){
        this.#page = 1;
    }
    get query(){
        return this.#query;
    }
    set query(newValue){
        this.#query = newValue;
    }
}