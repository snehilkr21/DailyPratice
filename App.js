const p = new Promise((resolve,reject)=>{
   resolve("Promise Ressolved")
})

async function getData(){
  return p;
}
const dataPromise = getData()
dataPromise.then((res)=>console.log("res",res))
console.log(dataPromise)