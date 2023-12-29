async function getData(){
  return "snehil";
}
const data=getData()
data.then((res)=>console.log(res))
console.log("data",data)


const p=new Promise((resolve , reject)=>{
    resolve("hello world");
})
async function getData1(){
    return p;
}
const result = getData1()
result.then((res)=>{
  console.log("res",res)
})