const p = new Promise((resolve,reject)=>{
   setTimeout(()=>{
        resolve("Promise resolved value!!")
   },10000)
})

function getData(){
  console.log("start")
  p.then((res)=>console.log("res",res))
  console.log("Namaste Javascript")
}
getData()
for(let i=0;i<10;i++){
  console.log("hello world")
}


// async function handlePromise(){
//   console.log("start")
//   const val = await p;
//   console.log("Namaste Javascript");
//   console.log("val",val)

// }
// handlePromise()
// for(let i=0;i<10;i++){
//   console.log("hello world")
// }