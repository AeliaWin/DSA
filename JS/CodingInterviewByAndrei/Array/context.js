// context vs scope

function name() {
    let a = 4; 
}
// console.log(a) //reference error since a is declared as let in function
// console.log will not find a in the global scope

console.log(this); //window obj run in browser
// console.log(this === window); //true in browser
console.log(this === global);

// this.alert("hello"); //run in browser

function a() {
    console.log(this);
}

a(); //in browser window object
// window.a();

const object4 = {
    a: function() {
        console.log(this);
    }
}
object4.a(); //{ a: f }