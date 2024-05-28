const Promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(100)
    },100)
}) 
const Promise2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(200)
    },200)
})
const Promise3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject(300)
    },300)
})

Promise.myAll = function(values){
   const pr = new Promise(function(resolve,reject){
    let result = []
    let length = values.length
    let completed = 0;
    values.forEach((item,index)=>{
        Promise.resolve(item)
        .then((res)=>{
            result[index]=res;
            completed++;
            if(completed==length){
                resolve(result)
            }
        })
        .catch((err)=>{
            reject(err)
        })
    })
   })
   return pr;
}
Promise.myAll([Promise1,Promise2,Promise3])
.then((res)=>{
    console.log("res",res)
})
.catch((err)=>{
    console.log("err",err)
})