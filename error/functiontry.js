let a = () => {
    try {
        return 'Yo!'
    } finally {
        console.log('Finish Your Work.')
    }
}

console.log(a())