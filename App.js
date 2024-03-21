const arr = [1,2,3,4]

Array.prototype.myMap = function () {
   let newArray = []
   for(let i=0 ; i < this.length ; i++ ){
       newArray.push(this[i]*2)
   }
   return newArray
} 

let result=arr.myMap()
console.log("result",result)