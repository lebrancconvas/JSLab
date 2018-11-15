let forloop = () => {
    for(let i = 1 ; i <= 10 ; i++) {
        console.log(i)
    }
}

let whileloop = () => {
    let j = 0
    while(j < 10) {
        console.log(j)
        j++
    }
}

let dowhileloop = () => {
    let n = 0
    do {
        console.log(n)
        n++
    } while (n < 10)
}

let foreachloop = () => {
    let arr = [1,2,3,4,5,6,7,8,9]
    arr.forEach((val) => {
        console.log(val)
    })
}

let loop = () => {
    console.log('For Loop')
    forloop()
    console.log('While Loop')
    whileloop()
    console.log('Do While Loop')
    dowhileloop()
    console.log('For Each Loop')
    foreachloop()
}

loop()
