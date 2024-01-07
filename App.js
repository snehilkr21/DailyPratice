"use strict"
const student1 = {
  name : "Snehil",
  printName : () => {
    const x = () =>{
      console.log(this)
    }
    x()
  }
}
student1.printName()
