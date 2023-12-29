
async function asyncFunction() {
  return 42;
}

async function asyncFunctionWithPromise() {
  return Promise.resolve(42);
}

async function asyncFunctionExplicitPromise() {
  return new Promise((resolve, reject) => {
    resolve(42);
  });
}

const result1 = asyncFunction(); // Returns a Promise that resolves with 42
const result2 = asyncFunctionWithPromise(); // Returns a Promise that resolves with 42
const result3 = asyncFunctionExplicitPromise(); // Returns a Promise that resolves with 42
console.log(result1,result2,result3)