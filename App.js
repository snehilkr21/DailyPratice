
async function handlePromise(){
     let data = await fetch(`https://api.github.com/users/snehilkr21`)
     //it gives a promise which contains the readable stream , if want to convert that readable stream to json then 
     //use .json , using .json also gives a promise that's why we use wait keyword and it need time to resolve
     //and when this promise is resolved it gives the actual result as we want.
     data = await data.json()
     console.log("data",data)
}
handlePromise()


