//const { useInsertionEffect } = require("react");

const promiseone= new Promise(function(resolve,reject){
    // do async task
    // database calls,cryptography
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
})

promiseone.then(function(){// then connected to resolve

    console.log("promise completed");  
}) 


const promisetwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "chai",email:"chai@xexample"})
    },1000)
})
promisethree.then(function(user1){
    console.log(user1);
})



promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"sandeep",pass:"123"})
        }
        else{
            reject('error,somethong wrong')
        }
    },1000)
})
promisefour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username )=> {
    console.log(username);
})
.catch(function(error){
    console.log(error);
    
}).finally(( )=> console.log("promise is either resolved or rejected"))


const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"boddu",pass:"123"})
        }
        else{
            reject('error, js somethong wrong')
        }
    },1000)
});

// async function cpf (){
//     await promisefive = await promisefive
//     console.log(response);
    
// }