// Question 01
class Cat {
    constructor(breed, color, playful) {
        this.breed = breed
        this.color = color
        this.isPlayful = playful
    }
    makeSound() {
        console.log('meow')
    }
    catchMice() {
        console.log('catched mice')
    }
    drinkMilk() {
        console.log('sip')
    }
}

const cat_1 = new Cat('persian', 'brown', true)
const cat_2 = new Cat('birman', 'white', false)

// console.log(cat_1)
// console.log(cat_1.breed)
// console.log(cat_1.color)
// console.log(cat_1.isPlayful)
// cat_1.makeSound()
// cat_1.catchMice()
// cat_1.drinkMilk()

// console.log(cat_2)
// console.log(cat_2.breed)
// console.log(cat_2.color)
// console.log(cat_2.isPlayful)
// cat_2.makeSound()
// cat_2.catchMice()
// cat_2.drinkMilk()

// Question 02

class Pirate {
    constructor(skin_color, body_type, is_tall) {
        this.skin_color = skin_color
        this.body_type = body_type
        this.is_tall = is_tall
    }
    shoot_gun() {
        console.log('shot fired')
    }
    drive_ship() {
        console.log('hands on steering')
    }
    dive_and_swim() {
        console.log('swim')
    }
}
const jollyRoger = [new Pirate('black', 'slim', true),
new Pirate('tan', 'chubby', false), new Pirate('white', 'athlete', false)]//first arry containing 3 pirates

for (let object of jollyRoger) {// looping thru first array
    for (let prop in object) {// looping thru pirates object
        // console.log(object[prop]) // printing their values of properties
    }
}

const blackPearl = [new Pirate('brown', 'slim', false),
new Pirate('white', 'chubby', false), new Pirate('black', 'athlete', false)]//second arry containing 3 pirates

for (let object of blackPearl) {
    for (let prop in object) {
        // console.log(object[prop])
    }
}