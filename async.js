async function SetTime() {
    let aTime = await setTimeout(() => {
        console.log('a')
    },1000)
    let bTime = await setTimeout(() => {
        console.log('b')
    }, 100)
    let cTime = setTimeout(() => {
        console.log('c')
    }, 2000)
}

SetTime()