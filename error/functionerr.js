let a = () => {
    try {
        return x
    } catch (e) {
        console.log(e.message)
    } finally {
        console.log('Finish Your Work')
    }
}

a()
