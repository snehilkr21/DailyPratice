function apiCall() {
    console.log("api call")
}

function betterFunction (fn,d) {
     let timer;
     return function() {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn()
        },d)
     }
}

const onChangeValue = betterFunction(apiCall,300)