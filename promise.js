function fnWorkFirst() {
    console.log("Work First")
    // callback()
}

function fnWorkSecond() {
    setTimeout(() => {
        console.log("Work Second")
        // callback()
    }, 100)
}

function fnWorkThird() {
    setTimeout(() => {
        console.log("Work Third")
        // callback()
    }, 100);
}

function mainWork() {
    return fnWorkFirst()
        .then(fnWorkSecond())
        .then(fnWorkThird())
        .catch((e) => {
            console.log(e)
        })
}


mainWork()