const arr = [1,2,3,4]

Array.prototype.ourEach = function () {
   for(let i=0 ; i < this.length ; i++ ){
       console.log(this[i]*2)
   }
} 

arr.ourEach()