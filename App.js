function outer(b){
  // let a=10;
  function inner(){
    console.log(a,b)
  }
  return inner
}
let a=100; 
outer(10)()