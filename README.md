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
14)Async & await use promise.then behind the scene and using it , it let us free from promise chaining (return the data to the next chain each time otherwise data would be loss).
15)The value of this keyword vary from place to place i.e,inside object, arrow function, global space etc.
16)The value of this inside the global space points to window object.
17)The value of This keyword inside the function(normal) is undefined in non-strict mode but according to THIS-SUBSITUTION if the value of this is undefined or null then it is replaced by global object ONLY IN NON-STRICT mode. But in strict mode the value of this keyword is null undefined. In strict mode the value of this keyword depends on how function is called , if we call like this window.a() then value will be depend on calling object , here calling object is window so value will be window
18)arraow function donot have its own this keyword . it takes the value of this keyword where it is enclosed . So suppose there is arraow function inside the method . so if we console this keyword inside that method then it observe that method is enclosed inside the object and that object is lexically inide global object so console out window. (it is applicable in both strict and non strict mode)
19)If there is a normal method inside the object then value of this keyord depends on how that method is called (obj.x()) , So value of this keyword is obj. (it is applicable in both strict and non strict mode)
20)call, aplly, bind is used to share the method. So Suppose there is a method which printName method and if we want to use of another object then we have to override the value of this keyword. student1.printName.call(student2) call method take the value to whom this points to
21)Inside the DOM tree the value of this keyword points to refernce to HTML element

