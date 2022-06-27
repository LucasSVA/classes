class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed

    }

    accelerate = (num) => {
        this.speed = this.speed + num
    }

    brake = (num) => {
        this.speed = this.speed - num


    }

    describe() {
        console.log(`${this.brand} is running at ${this.speed} km/h`);
    }
}

let ford = new Car("ford", 0)


ford.describe()
ford.accelerate(50)
ford.describe()
ford.brake(25)
ford.describe()