const p = new Promise((resolve,reject)=>{
    resolve("Done")
})

//handle Promise earlier
function getData(){
  p
  .then((res)=> console.log("res",res))
}
getData()

//handle Promise using async and await 
async function handlePromise(){
  const value=await p
  console.log("value",value)
}
handlePromise()