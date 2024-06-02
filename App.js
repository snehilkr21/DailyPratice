function apiCall(){
    console.log("hello world")
}

function betterFunction (fn,d){
    let timer;
    return function(){
        clearTimeout(timer)
        timer=setTimeout(()=>{
          fn()
        },d)
    }
}






const debounceFunction = betterFunction(apiCall,500)