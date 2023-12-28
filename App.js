// Check if Promise.allSettled already exists, if not, create a polyfill
function mySettled (promises) {
  const results = [];
      let completed = 0;

      if (promises.length === 0) {
        resolve(results);
      }

      const checkCompletion = () => {
        if (completed === promises.length) {
          resolve(results);
        }
      };

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            results[index] = { status: 'fulfilled', value };
          })
          .catch((reason) => {
            results[index] = { status: 'rejected', reason };
          })
          .finally(() => {
            completed++;
            checkCompletion();
          })
      })
    
}

// Example usage
const promise1 = Promise.resolve(3);
const promise2 = new Promise((_, reject) => setTimeout(reject, 100, 'Error'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 200, 'Resolved'));

const allPromises = [promise1, promise2, promise3];

Promise.allSettled(allPromises)
  .then((results) => {
    console.log("result",results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
