const p1 = new Promise((resolve,reject)=>{
  logWithTimestamp("p1 execution start")
   setTimeout(()=>{
        resolve("Promise resolved value!! 1")
   },30000)
})

const p2 = new Promise((resolve,reject)=>{
  logWithTimestamp("p2 execution start")
  setTimeout(()=>{
       resolve("Promise resolved value!! 2")
  },50000)
})

function logWithTimestamp(message) {
  const timestamp = new Date().toTimeString(); // Get current timestamp
  console.log(`[${timestamp}] ${message}`); // Prepend timestamp to the message
}

async function handlePromise(){
  console.log("start")

  logWithTimestamp("p1 start")
  const val1 = await p1;
  console.log("Namaste Javascript1");
  console.log("val",val1)

  logWithTimestamp("p1 end")
  logWithTimestamp("p2 start")

  const val2 = await p2;
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


