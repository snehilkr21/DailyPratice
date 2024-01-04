function snehil(){
  return new Promise((resolve,reject)=>{
    logWithTimestamp("execution start of p1")
     setTimeout(()=>{
          resolve("Promise resolved value!! 1")
     },50000)
  })
}

function prabhat(){
   return new Promise((resolve,reject)=>{
    logWithTimestamp("execution start of p2")
    setTimeout(()=>{
         resolve("Promise resolved value!! 2")
    },30000)
  })
}

function logWithTimestamp(message) {
  const timestamp = new Date().toTimeString(); // Get current timestamp
  console.log(`[${timestamp}] ${message}`); // Prepend timestamp to the message
}

async function handlePromise(){
  console.log("start")

  logWithTimestamp("p1 start")
  const val1 = await snehil();
  console.log("Namaste Javascript1");
  console.log("val",val1)

  logWithTimestamp("p1 end")
  logWithTimestamp("p2 start")

  const val2 = await prabhat();
  console.log("Namaste Javascript2");
  console.log("val",val2)

  logWithTimestamp("p2 end")
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


