// class Car {
//     constructor(brand, speed) {
//         this.brand = brand
//         this.speed = speed

//     }

//     accelerate = (num) => {
//         this.speed = this.speed + num
//     }

//     brake = (num) => {
//         this.speed = this.speed - num


//     }

//     describe() {
//         console.log(`${this.brand} is running at ${this.speed} km/h`);
//     }
// }

// let ford = new Car("ford", 0)


// ford.describe()
// ford.accelerate(50)
// ford.describe()
// ford.brake(25)
// ford.describe()



class tv {
    constructor(brand) {
        this.brand = brand
        this.channel = 1
        this.volume = 50
    }

    increase = () => {
        if (this.volume < 100 || this.volume > 0) {
            this.volume += 1
        }
    }

    decrease = () => {
        if (this.volume < 100 || this.volume > 0) {
            this.volume -= 1
        }

    }

    channelChange = () => {
        if (this.channel < 0 || this.channel > 50) {
            this.channel = 1

        } else {
            this.channel += 1
        }

    }

    reset = () => {
        this.volume = 50
        this.channel = 1
    }
    describe = () => (
        console.log(`Model : ${this.brand}; Volume : ${this.volume}`)
    )

}

let test = new tv("Sony")
//test.describe()
test.increase()
test.increase()
test.decrease()
test.channelChange()
test.reset()

console.log(test);