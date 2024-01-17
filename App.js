document.getElementById("grandParent").addEventListener("click",()=>{console.log("grandparent is cliked")},true)
document.getElementById("parent").addEventListener("click",(e)=>{
  console.log("parent is cliked") 
  e.stopPropagation()
  }  
  ,true)
document.getElementById("child").addEventListener("click",(e)=>{
  console.log("child is cliked")
},true)