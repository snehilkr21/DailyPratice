let arr = [1,2,3,5]

Array.prototype.myReduce = function(callbackFn,initialVal){
    let res=initialVal
    for(let i=0;i<this.length;i++){
       res = !res ? this[i] : callbackFn(res,this[i])
    }
    return res;
}

console.log(arr.myReduce((acc,curr)=>{
     return acc+curr
},0))