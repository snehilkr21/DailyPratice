document.getElementById("category").addEventListener("click",(e)=>{
        e.stopPropagation()
        console.log(e.target.tagName)
       if(e.target.tagName == "LI"){
         window.location.href = "/"+e.target.id
       }
})