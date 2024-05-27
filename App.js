const Promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject(33)
    },100)
})
const Promise2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject(55)
    },200)
})


Promise.myAny = function(values){
    const pr = new Promise(function(resolve,reject){
        let complete = 0;
        let length = values.length
        let err1 = []
        function check(){
            if(complete==length){
                reject(new AggregateError(err1))
            }
        }
        values.forEach((item,index)=>{
            Promise.resolve(item)
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                err1[index]=err
                complete++;
                check()
            })
        })
    })
    return pr;
}

Promise.myAny([Promise1,Promise2])
.then((res)=>{
    console.log("res",res)
})
.catch((err)=>{
    console.log("err",err.errors)
})