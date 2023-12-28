const cart = ["kurta", "pants", "shirts"];

const promise = createOrder(cart);
promise
  .then(function (orderId) {
    console.log("orderId", orderId);
})
  .catch(function (err) {
    console.log(err.message);
});
console.log("promise", promise);

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    const accept = true; // Set to true for demonstration purposes
    if (!accept) {
      const err = new Error("Not valid");
      reject(err);
    } else {
      resolve("12345");
    }
  });
  return pr;
}
