let student = {
    firstName : "Snehil",
    lastName  : "Raj"
}

function printName(state,age,country){
    console.log("77 ",country,age)
    console.log(this.firstName + " " + this.lastName + " state " + state + " age "+ age + " country " + country)
}

Function.prototype.myApply =  function (obj, ...args){
    console.log("console ", obj,args[0],args)
    if(typeof this !== 'function'){
        return new Error("Not callabel")
    }else{
        obj.fn = this
        obj.fn(...args[0])
    }
}
printName.myApply(student, ["Bihar",30,"India"])

