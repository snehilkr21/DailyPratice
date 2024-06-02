function apiCall(){
    console.log("apicall")
}

function betterFunction (fn,d) {
   let timer = true;
   return function (){
    if(timer){
        timer = false;
        fn()
        setTimeout(()=>{
          timer=true;
        },d)
    }
   }
}



const throttleFunction = betterFunction(apiCall,500)