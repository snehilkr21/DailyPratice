
let arr = [ 1,2,3,4 ];

Array.prototype.myMap = function(callback){
   console.log("callback -> ",callback)
   let result = []
   for(let i = 0 ; i<this.length ; i++){
     result.push(callback(this[i]))
   }
   return result
}

console.log(arr.myMap((el)=>el*2))