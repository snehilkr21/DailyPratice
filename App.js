"use strict"
const student1 = {
  name : "Snehil",
  printName : function(){
    console.log(this.name)
  }
}
student1.printName()

const student2 = {
  name : "Shashank raj",
}
student1.printName.call(student2)
student1.printName()