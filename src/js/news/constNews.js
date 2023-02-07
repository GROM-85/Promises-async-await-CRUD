export const BASE_URL = "https://newsapi.org/v2/everything?";
const API_KEY = "6be6f344da2b4b97bc5add7ed8b5d4a3";
export const options = {
    q: "",
    apiKey: API_KEY,
    sortBy: "",
    pageSize:null,
    searchIn: "",

}

export const refs = {
    input: document.querySelector(".search-bar"),
    searchIn: document.querySelector("#searchIn"),
    searchBtn:document.querySelector("#search_btn"),
    sortBy: document.querySelector("#sortBy"),
    perPage: document.querySelector("#pageSize"),
    content: document.querySelector(".content"),

}