let student = {
    firstName : "Snehil",
    lastName  : "Raj"
}

function printName(state,age,country){
    console.log("77 ",country,age)
    console.log(this.firstName + " " + this.lastName + " state " + state + " age "+ age + " country " + country)
}

Function.prototype.myBind =  function (obj, ...args){
    console.log("console ", obj,args[0],args)
    if(typeof this !== 'function'){
        return new Error("Not callabel")
    }else{
        obj.fn = this
        return function (...args2){
             obj.fn(...args,...args2)
        }
    }
}
let result = printName.myBind(student, "Bihar",30)
result("India")

