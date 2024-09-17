// start writing your code here. When you are done, try saving it into assignment28.js file.

let age = 30;

if (age < 2) {
    console.log("the person is a baby.")
} else if ( age >= 2 && age < 4) {
    console.log("the person is a toddler");
} else if ( age >= 4 && age < 13) {
    console.log("the person is a kid.");
} else if ( age >= 13 && age < 20) {
    console.log("the person is a teenager");
} else if ( age >= 20 && age < 65) {
    console.log("the person is an adult.")
} else if (age >= 65) {
    console.log("the person is elder.")
}