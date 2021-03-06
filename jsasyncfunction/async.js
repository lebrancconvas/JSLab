function wait3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('3 Second'))
        }, 3000)
    })
}

function wait5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('5 Second'))
        }, 5000)
    })
}

function instance4() {
    console.log('4 Second but Instance')
}

async function wait() {
    await wait3()
    await instance4()
    await wait5()
}

wait()