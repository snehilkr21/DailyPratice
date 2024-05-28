const Promise1 = Promise.reject(12)
const Promise2 = Promise.reject(13)
const Promise3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject(14)
    },14)
})

Promise.myAny = function(values){
    const pr = new Promise(function(resolve,reject){
        let completed = 0;
        let result = []
        let length = values.length
        function check(){
            if(completed==length){
                reject(new AggregateError(result))
            }
        }
        values.forEach((item,index)=>{
            Promise.resolve(item)
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                result[index] = err
                completed++;
                check()
            })
        })
    }) 
    return pr;
}

Promise.myAny([Promise1,Promise2,Promise3])
.then((res)=>{
    console.log("res",res)
})
.catch((err)=>{
    console.log("err",err.errors)
})