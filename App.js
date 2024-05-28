const Promise1 = Promise.resolve(100)
const Promise2 = Promise.reject(200)
const Promise3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(300)
    },300)
})



Promise.mySettled = function(values){
    const pr = new Promise(function(resolve,reject){
         let result = [];
         let length = values.length
         let completed = 0
         function check(){
            if(length==completed){
                resolve(result)
            }
         }
         values.forEach((item,index)=>{
            Promise.resolve(item)
            .then((res)=>{
                result[index]={
                    "status" : "fulfilled",
                    "value" : res
                }
                completed++;
                check()
            })
            .catch((err)=>{
                result[index]={
                    "status" : "rejected",
                    "value" : err
                }
                completed++;
                check() 
            })
         })
    })
    return pr;
}
Promise.mySettled([Promise1,Promise2,Promise3])
.then((res)=>{
    console.table(res)
})
.catch((err)=>{
    console.log("err",err)
})