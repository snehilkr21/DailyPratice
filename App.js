const promise1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(33)
    }, 100);
})
const promise2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject(55)
    },200)
})
const promise3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
         resolve(45)
    },300)
})

Promise.mySettled = function(values){
    const pr= new Promise(function(resolve,reject){
        let completed = 0;
        let length = values.length;
        let result = []
        function check(){
            if(completed==length){
                resolve(result)
            }
        }
        values.forEach((item,index)=>{
            Promise.resolve(item)
            .then((res)=>{
                completed++
                result[index] = {
                    "status" : "fulfilled",
                    "value" : res
                }
                check()
            })
            .catch((err)=>{
                completed++;
                result[index] = {
                    "status" : "rejected",
                    "value" : err
                }
                check()
            })
        })
    })
    return pr;
}

Promise.mySettled([promise1,promise2,promise3])
.then((res)=>{
    console.table(res)
})
.catch((err)=>{
    console.log("err",err)
})