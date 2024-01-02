const p1 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
        resolve("Promise resolved value!! 1")
   },5000)
})

const p2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
       resolve("Promise resolved value!! 2")
  },10000)
})

async function handlePromise(){
  console.log("start")

  const val1 = await p1;
  console.log("Namaste Javascript1");
  console.log("val",val1)

  const val2 = await p2;
  console.log("Namaste Javascript2");
  console.log("val",val2)
}
handlePromise()
for(let i=0;i<10;i++){
  console.log("hello world")
}

// function getData(){
//   console.log("start")
//   p.then((res)=>console.log("res",res))
//   console.log("Namaste Javascript")
// }
// getData()
// for(let i=0;i<10;i++){
//   console.log("hello world")
// }