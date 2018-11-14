function SetTime() {
    setTimeout(() => {
		console.log('a')
		setTimeout(() => {
			console.log('b')
			setTimeout(() => {
				console.log('c')
			},1000)
		},100)
	},2000)
}

SetTime()
