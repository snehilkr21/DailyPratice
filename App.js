const obj={
    "first" : "Snehil",
    "last"  : "Raj",
    
}
const printFullName =function(pincode,location){
    console.log(this.first+" "+this.last+" "+pincode+" "+location)
}
printFullName.apply(obj,["844101","Patna"])
