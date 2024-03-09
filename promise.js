let promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name : "John" , age : 15, car : "Aston Martin" , colour:"yellow"})
    },1000)
})

promiseOne.then(function(user){
    console.log(user)
})

let promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name : "John" , age : 15, car : "Aston Martin" , colour:"yellow"})
    },2000)
})

promiseTwo.then(function(app){
    return app.name;

}).then(function(hap){
    console.log(hap)
})
promiseTwo.then(function(under){
    return under.car;

}).then(function(hund){
    console.log(hund)
})


let promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({color:"yellow"})
        }
        else{
            reject("rejected")
        }
    },3000)
})
async function consumedPromiseThree(){
    try{
        let resp = await promiseThree;
        console.log(resp);
    }
    catch(error){
        console.log(error);
    }
}
consumedPromiseThree()


let promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({name : "John" , age : 15, car : "Aston Martin" , colour:"yellow"})
        }
        else{
            reject("error in this js function")
        }
    },4000)
})
async function consumedPromiseFour(){
    try{
        let mango = await promiseFour;
        console.log(mango);
    }
    catch(error){
        console.log(error);
    }
}
consumedPromiseFour()