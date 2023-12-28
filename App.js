function myAny(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      reject(new AggregateError('No promises were provided'));
    }

    const errors = [];
    let completed = 0;

    const checkCompletion = () => {
      if (completed === promises.length) {
        reject(new AggregateError('All promises were rejected', errors));
      }
    };

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((reason) => {
          errors.push(reason);
          completed++;
          checkCompletion();
        });
    });
  });
}

// Example usage
const promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'First'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 300, 'Second'));
const promise3 = new Promise((_, reject) => setTimeout(reject, 200, 'Third'));

const allPromises = [promise1, promise2, promise3];

myAny(allPromises)
  .then((result) => {
    console.log('Resolved:', result);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
