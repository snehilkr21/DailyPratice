const prom1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("gfg1")
    }, 1000)
})

const prom2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject("error")
    }, 4000)
})

const prom3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("gfg2")
    }, 3000)
})

const prom4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("gfg3")
    }, 3000)
})

Promise.myall = function (values) {
    const promise = new Promise(function (resolve, reject) {
        let result = [];
        let total = 0;
        values.forEach((item, index) => {
            console.log(`xcv${index}`, item);
            Promise.resolve(item)
                .then((res) => {
                    console.log('dfg1', res);
                    result[index] = res;
                    total++;
                    if (total === values.length)
                        resolve(result);
                })
                .catch((err) => {
                    console.log('dfg2', err);
                    reject(err);
                })
        })
    })
    return promise
}

Promise.myall([
    prom1,
    prom3,
    prom4
])
    .then((res) => {
        console.log(res);
    })
    .catch((er) => {
        console.log(er)
    })