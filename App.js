const arr = [1,2,3,4]

Array.prototype.myFilter = function () {
   let newArray = []
   for(let i=0 ; i < this.length ; i++ ){
       this[i]>2 && newArray.push(this[i])
   }
   return newArray
} 

let result=arr.myFilter()
console.log("result",result)