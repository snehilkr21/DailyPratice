const promise1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(33)
    }, 100);
})
const promise2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(33)
    }, 100);
})
const promise3 = Promise.reject(55);

Promise.myAll = function (values){
    const pr = new Promise(function (resolve,reject){
        let result = []
        let completed = 0;
        let length =values.length
        values.forEach((item,index)=>{
            Promise.resolve(item)
            .then((res)=>{
                completed++;
                result[index]=res
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

Promise.myAll([promise1,promise2,promise3])
.then((res)=>{
    console.log("res",res)
})
.catch((err)=>{
    console.log("err",err)
})