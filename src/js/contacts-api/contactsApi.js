import axios from 'axios';

// axios.defaults.baseURL = 'https://63df7dffa76cfd4105834f36.mockapi.io/contacts/';

export class Contact{
    #BASE_URL = 'https://63df7dffa76cfd4105834f36.mockapi.io/contacts/contacts';

    constructor(){
        
    }

    async getData(){
        const response = await axios.get(this.#BASE_URL);
        if(response.status !== 200){
            throw new Error("Axios error: ",error.message);
        }
        return response;
    }

    async getDataById(id){
        const response = await axios.get(this.#BASE_URL + `${id}`);
        if(response.status !== 200){
            throw new Error(error.message);
        }
        return response;
    }

    async postData(newData){

        const response = await axios.post(this.#BASE_URL,newData);
        if(response.status !== 201){
            throw new Error(error.message);
        }
        return response;
    }
    async updateData({id,data} = {}){
        const response =await axios.put(this.#BASE_URL + `/${id}`,data);
        if(response.status !== 200){
            throw new Error(error.message);
        }
        return response;
    }

    async deleteData(id){
        const response = await axios.delete(this.#BASE_URL + `/${id}`)
        if(response.status !== 200){
            throw new Error(error.message);
        }
        return response;
    }
}