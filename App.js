let name1 = {
  firstName : "Snehil",
  lastName :  "kumar",
}

let name2 = {
  firstName : "Sachin",
  lastName :  "Tendulkar",
}

let printFullName = function (homeTown,pincode) {
  console.log(this.firstName + " " + this.lastName + " from "+homeTown + " "+ pincode);
}
let fun = printFullName.bind(name1,"Bihar","844101")
console.log("fun",fun)
fun()