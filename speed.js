class Car {
    constructor (speed) {
        this.speed = speed
    }
    drive() {
        console.log(`Speed : ${this.speed} km/hr`)
    }
    distance(hr) {
        console.log(`Distance : ${this.speed * hr}`)
    }

}

car1 = new Car(80)
car1.drive()
car1.distance(2)