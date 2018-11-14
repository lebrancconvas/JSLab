function SetTime() {
    return setTimeout(() => {
        console.log('a')
    },1000).then(setTimeout(() => {
        console.log('b')
    }),100).then(setTimeout(() => {
        console.log('c')
    }),2000)
}

SetTime()