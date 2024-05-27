const promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(33)
    },100)
})
const promise2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject(33)
    },200)
})
const promise3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(33)
    },300)
})

Promise.myAll = function(values){
   const pr = new Promise(function(resolve,reject){
        let result = [];
        let length =values.length
        let complted =0
        values.forEach((item,index)=>{
            Promise.resolve(item)
            .then((res)=>{
                result[index]=res;
                complted++
                if(complted==length){
                    resolve(result)
                }
            })
            .catch((err)=>{
                reject(new Error(`fails ${err}`))
            })
        })
   })
   return pr;
}

Promise.myAll([promise1,promise2,promise3])
.then((res)=>{
    console.log("res",res);
})
.catch((err)=>{
    console.log("err",err.message)
})