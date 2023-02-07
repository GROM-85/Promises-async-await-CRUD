const frameworks = ['React', 'Vue', 'Angular'];

const getRandomDelay = () => Math.ceil(Math.random() * 1000);

const makePromise = (framework) => {
    let delay = getRandomDelay();
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(delay < 500){
                resolve({framework,delay});
            }else{
                reject({framework, delay, error:"Promise error"});
            }
        },delay)
    })
}

const promises =  frameworks.map(item => makePromise(item)); // array of promises

function onSuccess({framework,delay}){
    console.log(`🥝${framework} won with ${delay} ms`);
}

function onReject({framework,delay,error}){
    console.log(`❌${error}! ${framework} rejected in ${delay} ms`);
}

// Promise.race([...]) return first settled => fullfilled OR rejected


Promise.race(promises)
    .then(onSuccess)
    .catch(onReject);

// Promise.all([...]) return whether all fullfilled OR one first rejected


Promise.all(promises)
    .then((response) => {
        response.forEach(onSuccess)
    })
    .catch(onReject);

    
//Promise.allSettled([...]) return in then() response as [] of all resolved/rejected promises
Promise.allSettled(promises)
    .then((response) => {
        console.log(response);
        response.forEach(({status,reason,value}) => {
            if(status === "fulfilled"){
                onSuccess(value);
            }else{
                onReject(reason);
            }
        })
    })
    
// Promise.any([...]) return any first resolved promise or all rejected

Promise.any(promises)
    .then(response => {
        console.log(response);
        onSuccess(response);
    })
    .catch(({errors}) => errors.forEach(onReject)); // error is object with properties : errors,message,stack

//      {
//     * errors: (3) [{…}, {…}, {…}]
//     * message: "All promises were rejected"
//     * stack: "AggregateError: All promises were rejected"
//     * }


// XMLHttpRequest
const BASE_URL = "https://api.github.com/users/"

function getUser(userId){
    let xhrequest = new XMLHttpRequest();

    return new Promise((resolve,reject) =>{
        xhrequest.open("GET",BASE_URL + userId);
        xhrequest.send();
        xhrequest.addEventListener("load",() =>{
            resolve(xhrequest)
        })
        xhrequest.addEventListener("error", () => {
            reject(xhrequest)
        })

    })
}

getUser("GROM-85")
        .then((data) => {
            if(data.status !== 200){
                throw new Error("OOps something wrong")
            }
            return JSON.parse(data.response);
        })
        .then(console.log)
        .catch((error) => console.log(error));
       