// "use strict"
const obj = {
  a : 10,
  x : function(){
    console.log(this)
  }
}
obj.x()