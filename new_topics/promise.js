// <!-- Promises understanding -->
// <!-- fetch works -->

// cryptography, file access: promise is required
// promise basically don't execute right now it will take time and execute in a perticular time. It could be success or failure

// Promises are objects representing the eventual completion or failure of an asynchronous operation
// ES6
// Bluebird and queue library was used to fetch or the tasks we do using promise now. but for performance promise is one step forward 

// promise creation:

const promiseOne = new Promise(function(resolve, reject){
// do an async task- db calls, cryptography, network
setTimeout(function(){
    console.log("Async task is completed");
    resolve() // used aftet all the codes are executed to resolve and it connects with then which consumed the promise properly and finish the task 
},1000)
})  

// promise consumtion:

promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
setTimeout( function(){
    resolve({username: "Protik", email:"pro@gmail.com"})
},1000)
})

promiseThree.then(function(user){
console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username: "Protik", pass:"123"
            })
        }
        else{
reject("ERROR: something went wrong")
        }
    } ,1000)
})

promiseFour
.then((user)=> {
    console.log(user);
    return user.username
})
.then((username)=>{
    //chaining of then
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("the promise is resolved or rejected - will run always");
})

const promiseFive= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username: "Promise 5", pass:"123"
            })
        }
        else{
reject("ERROR: Promise 5 went wrong")
        }
    } ,1000)
})

async function consumePromiseFive(){
    try { 
        //in this method we will need try catch to handel errors otherwise with normal values it is okey for working
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// +++++++++++++++++++++++++++++

// async function getallusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }

// }
// getallusers()

// writing the same code in .then.catch

fetch('https://jsonplaceholder.typicode.com/users') //the response will come as promise so we can use .then .catch
.then((data)=>{
    // atfirst you have to return
    return data.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("E: ",error);
})
