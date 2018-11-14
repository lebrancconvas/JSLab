let printA = () => {
    console.log("a")
}

let printB = () => {
    setTimeout(() => {
        printA()
    }, 100);
    console.log("b")
}

let printC = () => {
    setTimeout(() => {
        printB()
    }, 1000)
    console.log('c')
}

printC()
