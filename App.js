
let arr = [ 1,2,3,4 ];

Array.prototype.myFilter = function(callback){
   console.log("callback -> ",callback)
   let result = []
   for(let i = 0 ; i<this.length ; i++){
     this[i]>2 && result.push(callback(this[i]))
   }
   return result
}

console.log(arr.myFilter((el)=>el))