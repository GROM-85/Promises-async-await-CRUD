import Notiflix from "notiflix";

const form = document.querySelector("#save-later-form");
const saveButton = document.querySelector("#save");
const submitButton = document.querySelector("#submit");

const formElements = form.elements;
const KEY_FORM = "formData";
let formData = {};

function formSubmitHandler(event){
    event.preventDefault();
    for(let [key,value] of new FormData(event.currentTarget).entries()){
      formData[key] = value;
    }
    console.log(formData);
    Notiflix.Notify.success("The form has been successfully submitted");
    localStorage.removeItem(KEY_FORM);
    event.currentTarget.reset();
    
  }
  
  function retreiveData(){
    let defaultData;
    try{
     defaultData = JSON.parse(localStorage.getItem(KEY_FORM)) || {};

     for(let elem of formElements){
      if(elem.name) elem.value = defaultData[elem.name] || "";
      
     }
    }catch(error){
      console.log(error.message);
      Notiflix.Notify.warning(error.message);
    }
  }
  
  function saveDataHandler(){
    
    for(let [key,value] of new FormData(form).entries()){
      formData[key] = value;
    }
    localStorage.setItem(KEY_FORM,JSON.stringify(formData));
    
  }
  form.addEventListener("submit",formSubmitHandler);
  saveButton.addEventListener("click",saveDataHandler);
  retreiveData();


// const getFormData = () => {
//   const data = {};

//   for (const { name, value } of formElements) {
//     if (name) { //cause buttons dont have names
//       data[name] = value;
//     }
//   }

//   return data
// };

// const handleSudmit = (event) => {
//   event.preventDefault()

//   form.reset()
//   localStorage.removeItem(KEY_FORM)

//   const message = "The form has been successfully submitted";
//   Notiflix.Notify.success(message);
// };

// const handleSave = (event) => {
//   let data = getFormData();

//   localStorage.setItem(KEY_FORM, JSON.stringify(data))

//   const message = "Form draft has been saved!";
//   Notiflix.Notify.success(message);
// };

// const getSavedFormData = () => {
//   try {
//     const saveData = JSON.parse(localStorage.getItem(KEY_FORM))

//     for (const element of formElements) {

//       // if(saveData[element.name]){}
//       if (element.name in saveData) {
//         element.value = saveData[element.name]
//       }
//     }

//     const message = "Form has been refilled with saved data!";
//     Notiflix.Notify.info(message);
//   } catch (error) {
//     const message = "Enter data!";
//     Notiflix.Notify.warning(message);
//   }
// };

// submitButton.addEventListener("click", handleSudmit);
// saveButton.addEventListener("click", handleSave);

// getSavedFormData();