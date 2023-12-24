function attachEventListener(){
  let count =0;
  document.getElementById("clickMe").
  addEventListener("click",()=>{
    console.log("click me",++count)
  })
}
attachEventListener()