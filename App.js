function myRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((reason) => {
          reject(reason);
        });
    });
  });
}

// Example usage
const promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'First'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 300, 'Second'));
const promise3 = new Promise((_, reject) => setTimeout(reject, 200, 'Third'));

const allPromises = [promise1, promise2, promise3];

myRace(allPromises)
  .then((result) => {
    console.log('First settled:', result);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
