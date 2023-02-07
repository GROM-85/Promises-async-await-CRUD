const BASE_URL = 'https://api.github.com/users/';

const userLogins = [
    'luxplanjay',
    'SofiaProtsiv',
    'qweeqer',
    'Maxwelllife',
    'xWinst',
    'AleksZhov',
    'gsmoff',
];

function getUsers(users){
    let promises =  users.map(user => {
         return fetch(BASE_URL + user)
                .then(response => {
                    if(!response.ok){
                        throw new Error("User doesnt exist");
                    }
                    console.log(response)
                    return response.json();
                })
    })
    return Promise.allSettled(promises);
    
}

getUsers(userLogins)
    .then(console.log)
    .catch(error => concole.log(error.message));






