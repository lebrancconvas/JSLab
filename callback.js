function fnWorkFirst(callback) {
    console.log("Work First")
    callback()
}

function fnWorkSecond(callback) {
    setTimeout(() => {
        console.log("Work Second")
        callback()
    },100)
}

function fnWorkThird(callback) {
    setTimeout(() => {
        console.log("Work Third")
        callback()
    },100);
}

function mainWork() {
    fnWorkFirst(function () {
        fnWorkSecond(function () {
            fnWorkThird(function() {
                console.log('CallBack')
            })
        })
    })
}

mainWork()
