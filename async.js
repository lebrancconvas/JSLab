function fnWorkFirst() {
    console.log("Work First")
    // callback()
}

function fnWorkSecond() {
    setTimeout(() => {
        console.log("Work Second")
        // callback()
    }, 1000)
}

function fnWorkThird() {
    setTimeout(() => {
        console.log("Work Third")
        // callback()
    }, 100);
}

async function mainWork() {
    let a = await fnWorkFirst()
    let b = fnWorkSecond()
    let c = await fnWorkThird()
}

mainWork()