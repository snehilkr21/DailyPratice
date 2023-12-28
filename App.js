const cart = ["kurta", "pants", "shirts"];

createOrder(cart)
.then(function (orderId) {
    console.log("orderId", orderId);
    return orderId;
})
.catch(function(err){
    console.log(err.message)
})
.then(function(orderId){
    return proccedToPayment(orderId)
})
.then(function(paymentInfo){
    console.log("paymentInfo",paymentInfo)
})
.catch(function (err) {
    console.log(err.message);
})
.then(function(){
  console.log("I will be called")
})
console.log("promise", promise);

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    const accept = false; // Set to true for demonstration purposes
    if (!accept) {
      const err = new Error("Not valid");
      reject(err);
    } else {
      resolve("12345");
    }
  });
  return pr;
}
function proccedToPayment(orderId){
    return new Promise(function (resolve,reject){
        resolve(`åpayment done successfully,${orderId}`)
    })
}