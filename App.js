const Promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
       reject(33)
    },500)
})
const Promise2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(44)
    },1000)
})

Promise.myRace = function(values){
    const pr = new Promise(function(resolve,reject){
        values.forEach((item,index)=>{
            Promise.resolve(item)
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    })


    return pr
}

Promise.myRace([Promise1,Promise2])
.then((res)=>{
    console.log("res",res)
})
.catch((err)=>{
    console.log("err",err);
})