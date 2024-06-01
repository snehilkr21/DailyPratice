const obj = {
    name : "Snehil",
    printName : () => {
        const x = () =>{
            console.log(this)
        }
        x()
    }
}
obj.printName()