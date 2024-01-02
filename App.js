const p = new Promise((resolve,reject)=>{
   resolve("Promise Ressolved")
})

async function handlePromise(){
  const val = await p;
  console.log("val",val)
}
handlePromise()
// function getData(){
//   p.then((res)=>console.log("res",res))
// }
// getData()