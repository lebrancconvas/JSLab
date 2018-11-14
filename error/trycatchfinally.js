try {
    let a = b++
    console.log(a)
} catch (e) {
    console.log(e.message)
} finally {
    console.log('Finish Your Work.')
}