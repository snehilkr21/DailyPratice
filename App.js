
async function getData(){
  let data = await fetch("https://api.github.com/users/snehilkr21")
  data = await data.json()
  console.log("555")
  console.table(data)
}
getData()

function getData1(){
    fetch("https://api.github.com/users/snehilkr21")
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log("1616")
        console.table(res)
    })
    console.log("Namaste javascript")
}
getData1()