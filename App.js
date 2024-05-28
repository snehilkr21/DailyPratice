const Promise1 = Promise.reject(12)
const Promise2 = Promise.reject(13)
const Promise3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(14)
    },14)
})

Promise.myRace =  function(values){
    const pr = new Promise(function(resolve,reject){
        values.forEach((item,index)=>{
            Promise.resolve(item)
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err);
            })
        })
    })
    return pr;
}

Promise.myRace([Promise1,Promise2,Promise3])
.then((res)=>{
    console.log("res",res)
})
.catch((err)=>{
    console.log("err",err)
})