function apiCall(){
    console.log("apiCall");
}

function betterFunction(fn,d){
    let timer = true;
    return function(){
        if(timer){
        timer =false;
        fn()
        setTimeout(()=>{
        timer = true;
        },d)
    }
    }
}



const throttleFunction = betterFunction(apiCall,500)