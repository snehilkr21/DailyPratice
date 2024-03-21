
let arr = [ 1,2,3,4 ];

Array.prototype.myForEach = function(callback){
   console.log("callback -> ",callback)
   for(let i = 0 ; i<this.length ; i++){
    console.log(this[i] + " " + callback(this[i]))
   }
}

arr.myForEach((el)=>el*2)