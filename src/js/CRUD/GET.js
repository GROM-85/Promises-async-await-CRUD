const BASE_URL = "http://localhost:8081/employees";

const getEmployees = () => {
    return fetch(BASE_URL)
            .then(response => {
                if(!response.ok){
                    throw new Error(response.status);
                }
                return response.json();
            })
            
}

const getEmloyeeById = async (id) =>{
    const response = await fetch(BASE_URL + `/${id}`);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return await response.json();
} 

getEmloyeeById(2);