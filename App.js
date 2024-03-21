Array.prototype.myFlat = function (depth){
    let res=[]
    this.forEach((el)=>{
         console.log(el)  
        if(Array.isArray(el) && depth>0){
            res.push(el.myFlat(...el,depth-1))
        }else{
            res.push(el)
        }
    })
    return res
}
let arr = [1,2,[[3,4]],5,6]
console.log("result "+arr.myFlat(1))

