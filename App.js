let cart = ["shoe","belt","shirt"];
api.createOrder(cart,function(orderId){
    api.proccedToPayment(orderId,function(paymentInfo){
        api.showOrderSummary(paymentInfo,function(paymentInfo){
            api.updateWallet(paymentInfo)
        })
    })
})

createOrder(cart)
.then(function(orderId){
    return proccedToPayment(orderId)
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo)
})
.then(function(paymentInfo){
    updateWallet(paymentInfo)
})