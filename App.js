let counter=0
const getData = () =>{
  console.log("fetching Data",counter++)
}

const doSomething = (fn ,d) =>{
  let timer;
  return function () {
    clearTimeout(timer)
    timer = setTimeout(()=>{
       fn()
    },d)
  }
}
const betterFunction =doSomething(getData,300)