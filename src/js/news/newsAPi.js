export class newsAPI{
    constructor({url} = {}){
        this.url = url;
        this.page = 1;
    }

    async getData(options){
        const response = await fetch(this.url + new URLSearchParams(options));
        if(!response.ok){
            throw new Error(error);
        }
        this.updatePage();
        return await response.json();
    }

    updatePage(){
        this.page ++;
    }
    resetPage(){
        this.page = 1;
    }
}