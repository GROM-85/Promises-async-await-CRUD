//TODO:
// 1 MARKUP
// 2 FETCH API
// 3 GET GEOPOSITION
// 4 const file
'use strict'
import {WeatherAPI} from "./weatherAPI";
import { getPosition } from "./getGeoposition";
import { BASE_URL,optsByCity,optsByPos } from "./weather_const";
import { makeMarkup } from "./renderMarkup";


const inputCity = document.querySelector(".search-bar");
const locationBtn = document.querySelector('#get_location_btn');
const searchBtn = document.querySelector('#search_btn');
const content = document.querySelector('.content');
const fetchApi = new WeatherAPI({url: BASE_URL});

async function geoSearchHandler(){
    try{
        clearContent();
        const {coords : {latitude,longitude}} = await getPosition();
        optsByPos.lat = latitude;
        optsByPos.lon = longitude;

        const response = await fetchApi.getData(optsByPos);
        console.log(response)
        const markup = makeMarkup(response);
        content.insertAdjacentHTML('beforeend',markup);

    }catch(error){
        console.log(error.message)
    }
}

async function inputHandler(){
    try {
        clearContent();
        optsByCity.q = inputCity.value.trim();
        const response = await fetchApi.getData(optsByCity);
        const markup = makeMarkup(response);
        content.insertAdjacentHTML('beforeend',markup);
    }
    catch(error){
        console.log(error.message)
    }
    finally{
        inputCity.value = "";
    }
}

function clearContent(){
    content.innerHTML = "";
}

locationBtn.addEventListener("click",geoSearchHandler);
searchBtn.addEventListener("click",inputHandler);
inputCity.addEventListener("keyup",(e) => {
    if(e.key === "Enter"){
        inputHandler();
    }
})