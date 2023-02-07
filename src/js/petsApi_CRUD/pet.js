import * as catApi from "./petApi";
import { createPetsCards } from "./renderMarkup";

const gallery = document.querySelector(".js-gallery");
const inputImg = document.querySelector(".input-img");

catApi.get().then(res => {
    const markup = createPetsCards(res);
    gallery.insertAdjacentHTML("beforeend",markup);
})

async function deleteImgHandler(e){
    const id = e.target.id;

    try{
        const reponse = await catApi.deleteData(id);
        console.log(reponse)
    }catch(error){
        console.log(error);
    }
    finally{
        e.target.remove();
    }
    
}

gallery.addEventListener("click",deleteImgHandler);
inputImg.addEventListener("change",async (e) => {
    const file = e.currentTarget.files[0];
    try{

    const res = await catApi.post(file);
    console.log(res);

    }
    catch(error){
        console.log(error);
    }
})
