const form = document.querySelector(".subscription");
const btn = document.querySelector(".submit__btn");
const messageEl = document.querySelector(".message");
const BASE_URL = "http://localhost:8081/employees"
const formData = {};

const showMessage = (message,type = "success") =>{
    console.log(message)
    messageEl.textContent = `${message} with ${type}`;
 }
const subscribe = async(event) =>{
    event.preventDefault();
    
    getFormData();
    console.log(formData)
    try{
        const response = await fetch(BASE_URL,{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(formData),
        })
        console.log(response)
        let data = await response.json();
        console.log(data);
        showMessage(response.statusText,type = !response.ok ? "error":"success")
    }
    catch(error){
        console.log(error.status);
    }
    finally{
        console.log("clear form")
        form.reset();// cause in finally event is null
        setTimeout(() => {
            messageEl.textContent = "";
        },1500)
    }
}

let getFormData = () => {
    for(let [key,value] of new FormData(form).entries()){
        formData[key] = value;
    }
}

form.addEventListener("submit",subscribe)