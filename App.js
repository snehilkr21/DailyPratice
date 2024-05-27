let cart = ["shoe","belt","shirt"];

function createOrder(cart){

    const pr = new Promise( function(resolve,reject){
         let check = true;
         if(check){
            resolve("55")
         }else{
            reject(new Error("Error"))
         }
    }) 
    return pr;
}
createOrder(cart,function(orderId){
    proccedToPayment(orderId,function(paymentInfo){
        showOrderSummary(paymentInfo,function(paymentInfo){
            updateWallet(paymentInfo)
        })
    })
})

function proccedToPayment(paymentInfo){
    const pr= new Promise(function(resolve,reject){
        let check=false;
        if(check){
            resolve(2);
        }else{
            reject(new Error("hello"))
        }
    })
    return pr;
}
createOrder(cart)
.then(function(orderId){
    console.log("orderId",orderId)
    return proccedToPayment(orderId)
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo)
})
.then(function(paymentInfo){
    updateWallet(paymentInfo)
})
.catch((err)=>{
    console.log(err.message)
})