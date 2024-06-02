function data(){
    console.log("data fetched");
}

const fetchingData = (fn,d) =>{
    let timer;
    return function(){
        clearTimeout(timer)
        timer=setTimeout(()=>{
           fn()
        },d)
    }
}

const apicall = fetchingData(data,300)