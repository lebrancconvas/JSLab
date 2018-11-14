function wait3(callback) {
	setTimeout(() => {
        console.log('3 Second')
        callback()
    },3000)
}

function wait5() {
    setTimeout(() => {
        console.log('5 Second')
    }, 5000)
}

function instance4(callback) {
    console.log('4 Second but Instance')
    callback()
}

function wait() {
    wait3(function() {
        instance4(function() {
            wait5()
        })
    })
}

wait()

