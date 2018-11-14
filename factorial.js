let factorialWay1 = n => {
    if (n === 0) {
        return 1
    } else if (n < 0) {
        return null
    } else {
        let numarray = []
        for (let i = 1; i <= n; i++) {
            numarray.push(i)
        }
        let fact = numarray.reduce((x, y) => x * y)
        return fact
    }
}

let factorialWay2 = n => {
    if (n === 1 || n === 0) {
        return 1
    } else if (n < 0) {
        return null
    } else {
        return n * factorialWay2(n - 1)
    }
}
