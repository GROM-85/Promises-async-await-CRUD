import {dataBaseTodo} from "./todoApi";
import { createNewTaskElement } from "./renderToDo";

const taskInput = document.getElementById("new-task");
const addButton = document.querySelector("button.add");
const tasksHolder = document.querySelector("#tasks-list");

let uid = () =>{
    return Date.now().toString(16) + Math.random().toString(36).substring(2);
} 
const todoDB = new dataBaseTodo();

//add new task
const addTask = async () =>{
    if(taskInput.value === ""){
        taskInput.style.borderColor = "red";
        return;
    }

    const newTodo = {
        id: uid(),
        title: taskInput.value.trim(),
    }
  
    try{
         // add to DB
        const response = await todoDB.postData(newTodo);
         // add to page
        const markup = createNewTaskElement(newTodo);
        tasksHolder.insertAdjacentHTML("afterbegin",markup);
    }catch(error){
        console.log(error.message)
    }
    finally{
        taskInput.value = "";
        taskInput.style.borderColor = "#ddd";
    }
  
}

// edit task

const editTask = async ({target}) =>{
    const {id } = target.parentNode; // li.id
    const li = target.parentNode;
    if(!target.matches(".edit")) return;

    let editInput = li.querySelector(".edit-input");
    let label = li.querySelector("label");

    if(editInput.type === "text"){
        try {
            let data = { title: editInput.value.trim() };
            const response = await todoDB.updateData({id,data});
            console.log(response);
            label.textContent = editInput.value.trim();
            
        } catch (error) {
            console.log(error)
        }
    }
    
    editInput.type = (editInput.type === "hidden" && "text")||"hidden";
    target.textContent = editInput.type === "hidden" ? "Edit": "Save"; 
    
}

// delete task

const deleteTask = async (e) => {
    const {id} = e.target.parentNode;
    
    if(!e.target.matches(".delete")) return;

    try {
        const response = await todoDB.deleteData(id);
        e.target.parentNode.remove();

    } catch (error) {
        console.log(error)
    }
}
window.addEventListener("load", async (e) =>{
    try{
        const response = await todoDB.getData();
        console.log(response);
        const markup = response.map(createNewTaskElement).join("");
        tasksHolder.insertAdjacentHTML("beforeend",markup);
    }catch(error){
        console.log(error);
    }
})


addButton.addEventListener("click",addTask);
tasksHolder.addEventListener("click",editTask);
tasksHolder.addEventListener("click",deleteTask);

taskInput.addEventListener("keydown",(e) =>{
    if(e.key === "Enter") addTask();
})