//instantiation
//make a copy of an obj and reuse the code
// instances OR multiple copies of an obj

class Player {
    // the first thing that run the class is the constructor function
    // create the properties in the class
    constructor(name, type) {
        console.log('player',this);
        this.name = name;
        this.type = type;
    }

    // method
    introduce() {
        console.log(`Hi, I am ${this.name}. I'm a ${this.type}.`)
    }
}

// copy the Player obj
class Wizard extends Player{
    constructor(name, type) {
        // console.log('wizard', this); //reference error 'this', need to call super first
        super(name, type); //use super to access the original obj properties
        console.log('wizard', this);
    }

    play() {
        console.log(`WEEEEEE I'm a ${this.type}.`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');  //create new Wizard obj
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.play();
wizard1.introduce();

wizard2.introduce();



// ES6
//classical inheritance
// shouldn't use this
// var Player1 = function(name, type) {
//     this.name = name;
//     this.type = type;
// }

// Player1.prototype.introduce = function() {
//     console.log("Hi, I am " + this.name + ". I'm a " + this.type + ".");
// }

// var wizard3 = new Player('Shelly', 'healer');
// var wizard4 = new Player('Shawn', 'dark magic');

// wizard3.introduce();
// wizard4.introduce();

// wizard3.play = function() {
//     console.log("WEEEEEE I'm a " + this.type);
// }

// wizard4.play = function() {
//     console.log(`WEEEEEEE I'm a ${this.type}.`)
// }