 export class dataBaseTodo{
    #BASE_URL;

    constructor(){
        this.#BASE_URL = "http://localhost:8081/employees";
    }

    async getData(){
        const response = await fetch(this.#BASE_URL);
        if(!response.ok){
            throw new Error(error);
        }
        return await response.json();
    }

    async getDataById(id){
        const response = await fetch(this.#BASE_URL + `/${id}`);
        if(!response.ok){
            throw new Error(error);
        }
        return await response.json();
    }

    async postData(data){
        const options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
        const response = await fetch(this.#BASE_URL,options);
        if(!response.ok){
            throw new Error(error);
        }
        return await response.json();
    }

    async updateData({id,data}){
        const options = {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }

        const response = await fetch(this.#BASE_URL + `/${id}`,options);
        if(!response.ok){
            throw new Error(error);
        }
        return await response.json();
    }

    async deleteData(id){
        const options = {
            method:"DELETE"
        }
        const response = await fetch(this.#BASE_URL + `/${id}`,options);
        if(!response.ok){
            throw new Error(error);
        }
        return await response.json();
    }
}