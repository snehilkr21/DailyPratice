const GITHUB_API ="https://api.github.com/users/snehilkr21"
const user =fetch(GITHUB_API);
user.then((data)=>{
  console.log("data",data)
})
for(let i=0;i<5;i++)
  console.log("i love js")