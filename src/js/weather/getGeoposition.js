export function  getPosition(){
    if(navigator.geolocation){
        return new Promise((resolve,reject)=> {
            navigator.geolocation.getCurrentPosition(resolve,reject)}) // resolve(position) OR reject(error)
    }  
};



