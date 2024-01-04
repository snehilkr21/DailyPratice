// const p1 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//         resolve("Promise resolved value!! 1")
//    },20000)
// })

// const p2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//        resolve("Promise resolved value!! 2")
//   },10000)
// })

// async function handlePromise(){
//   console.log("start")

//   const val1 = await p1;
//   console.log("Namaste Javascript1");
//   console.log("val",val1)

//   const val2 = await p2;
//   console.log("Namaste Javascript2");
//   console.log("val",val2)
// }
// handlePromise()
// for(let i=0;i<10;i++){
//   console.log("hello world")
// }

// function getData(){
//   console.log("start")
//   p.then((res)=>console.log("res",res))
//   console.log("Namaste Javascript")
// }
// getData()
// for(let i=0;i<10;i++){
//   console.log("hello world")
// }


function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
}

async function sequentialWait() {
  console.log("== sequentialWait starts ==");

  // 1. Start two timers without waiting for each other
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();

  // 2. Wait for the slow timer to complete, and then log the result
  console.log(await slow);
  // 3. Wait for the fast timer to complete, and then log the result
  console.log(await fast);

  console.log("== sequentialWait done ==");
}

async function concurrent1() {
  console.log("== concurrent1 starts ==");

  // 1. Start two timers concurrently and wait for both to complete
  const results = await Promise.all([
    resolveAfter2Seconds(),
    resolveAfter1Second(),
  ]);
  // 2. Log the results together
  console.log(results[0]);
  console.log(results[1]);

  console.log("== concurrent1 done ==");
}

async function concurrent2() {
  console.log("== concurrent2 starts ==");

  // 1. Start two timers concurrently, log immediately after each one is done
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
  console.log("== concurrent2 done ==");
}

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
setTimeout(sequentialWait, 4000); // after 2 seconds, logs "slow" and then "fast"

// wait again
setTimeout(concurrent1, 7000); // same as sequentialWait

// wait again
setTimeout(concurrent2, 10000); // after 1 second, logs "fast", then after 1 more second, "slow"
