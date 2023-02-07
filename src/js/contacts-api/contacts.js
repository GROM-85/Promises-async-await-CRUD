import { Contact } from "./contactsApi";

const contact  = new Contact();
const data = {
    avatar:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80",
    createdAt: new Date(),
    name:"GROM85",
    phone:+48_514_636_611,
    email:"richfron@gmail.com"
}

const dataToUpdate = {
    name: "Yuliia2015",
    phone: +48_435_345_345,
    email:"ivan@gmail.com"
}

contact.postData(data);
contact.getData().then(({data}) => console.log(data));
contact.updateData({id:3,data:dataToUpdate})

