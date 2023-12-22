function a(){
  for(let b=1;b<=5;b++){
    function close(i){
      setTimeout(function(){
        console.log(i)
    },b*1000)
    }
    close(b)
  } 
}

a()