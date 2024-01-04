
async function handlePromise(){
  try{
    let data = await fetch(`https://apii.github.com/users/snehilkr21`)
     data = await data.json()
     console.log("data",data)
  }
  catch(err){
    console.log("err",err)
  }

}
handlePromise()


