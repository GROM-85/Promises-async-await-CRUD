const API_KEY = "live_ZbUHun3wu3uTP2TPC4gXHLIv4m5hPvT9FT8HsuHBlOB83V90UHGCiw1OM0jzQB7Z";
const BASE_URL = "https://api.thecatapi.com/v1/images/";


export const get = async () =>{
    const options = {
        method:"GET",
        headers:{
            "x-api-key":API_KEY,
            "Content-Type":"application/json"
        }
    }
    const params = {
        size: "med",
        limit:5,
    }
    const response = await fetch(BASE_URL+ "search?" + new URLSearchParams(params),options);
    if(!response.ok){
        throw new Error(error);
    }
    return await response.json();
}


export const post = async (image) => {
   const formData = new FormData(); // can create own form data key/value pairs
   formData.append("file",image);
    const options = {
        method:"POST",
        headers:{
            "x-api-key":API_KEY
        },
        body:formData

    }
    const params = {

    }
    const response = await fetch(BASE_URL + "upload" + new URLSearchParams(params),options);
    if(!response.ok){
        throw new Error(error);
    }
    return await response.json();
}

export const deleteData = async (id) => {
    const options = {
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            'x-api-key': API_KEY
        }
    }
    const response = await fetch(BASE_URL + `${id}`,options);
    if(!response.ok){
        throw new Error(error);
    }
    return await response.json();
}

