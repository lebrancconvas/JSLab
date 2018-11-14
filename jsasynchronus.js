function wait3() {
    setTimeout(() => {
        console.log('3 Second')
    }, 3000)
}

function wait5() {
    setTimeout(() => {
        console.log('5 Second')
    }, 5000)
}

function instance4() {
    console.log('4 Second but Instance')
}

function wait() {
    wait3()
    instance4()
    wait5()
}

wait()