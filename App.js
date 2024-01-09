let counter=0
const getData = () =>{
  console.log("fetching Data",counter++)
}

const doSomething = (fn ,d) =>{
  let timer = true;
  return function () {
    if(timer){
      timer = false
      fn();

      setTimeout(()=>{
         timer = true
      },d)}
    
  }
}
const betterFunction = doSomething(getData, 10)
console.log("betterFunction", betterFunction)