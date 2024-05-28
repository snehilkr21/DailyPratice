# DailyPratice
1)Callback hell is a phenomenon of calling callback inside the other callback . the shape of callback hell prymaid that why it is also called as prymaid of dooms
2)Inversion of control:- it is a phenomenon where we gave the responsibility of our callback to the another callback to execute it. the problem is that it create a bugs for us sometime either callback called , or called twice.
3)Promise.then method is available to the promise object.
4)Promise is a object which represent the eventual completion/failure of async operation and its result value.
5)Promise object are immutable, we cannot modify the content of object.
6)Promise.all takes the array of promises and return the value of promise result in an array. if any one promise fails then it immdetaily throw error.
7)Promise.allSettled takes the array of promise and resturn the array of object(having status and value). it waits for all promise to resolve. It donot come inside the .catch
8)Promise.race takes the array of promise and return the value of first settled(either resolve or reject). If first promise takes 500ssec to resolve and second takes 500sec to reject then it gives the result of reolve one.
9)Promise.any takes the array of promise and return the first resolved . if all promise fails then we have to throw new AggregateError which is captured using err.errors
10)Async keyword is used before function. Async function return a promise . if we reurn the non promise value then it convert it into promise then return it. we retrieve the actual data from promise is using .then method
11)Await is a keyword  that is placed before where we call the promise. And one more important point is that await keyword is always placed inside the async keyword. The await keyword always return the value which are passed from promise.
12)When Promise is not resolve (using await keyword) then JS engine will suspend the execution and come out of that function.
13)If we use await keyword out of async function then it throw syntax error.
