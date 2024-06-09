console.log(moment(new Date().getTime()).format("HH:mm:ss"))
console.log("start")
let startTime= new Date().getTime()
let endTime = startTime

setTimeout(()=>{
    console.log("setTimeout",moment(new Date().getTime()).format("HH:mm:ss"))
},500)

while(endTime<startTime+1000){
    endTime = new Date().getTime()
}
console.log("end")