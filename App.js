document.getElementById("category").addEventListener("click",
(e)=>{
  e.stopPropagation()
  if(e.target.tagName =="LI")
  window.location.href = "/"+e.target.id
  console.log("LI is clicked")
})

document.getElementById("div").addEventListener("click",
(e)=>{
  console.log("div is clicked")
})