export class WeatherAPI {

    constructor({url} = {}){
        this.url = url;
    }

    async getData(options){
        console.log(this.url);
        const response = await fetch(this.url + new URLSearchParams(options))   
        if(!response.ok){
            throw new Error("Ooops smthg went wrong!");
        }
        console.log(response);
        return await response.json();
    }
}