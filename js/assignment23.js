// start writing your code here. When you are done, try saving it into assignment23.js file.

let car = "Honda";
let myNum = 10;
let today = new Date();
let day = today.getDay();

if (car == "Honda") {
    console.log("Yeas..!! it's a Honda")
} else {
    console.log("No., it'snt a Honda.")
}

if (myNum > 0) {
    console.log("The number is positive.")
} else if (myNum < 0 ) {
    console.log("The number is negative.")
} else if (myNum == 0) {
    console.log("The Number is 0.")
}

if (day == 0) {
    console.log("it's a Monday");
} else if ( day == 1) {
    console.log("It's a tuesday")
} else if ( day == 2) {
    console.log("It's a wednesday")
} else if ( day == 3) {
    console.log("It's a thursday")
} else if ( day == 4) {
    console.log("It's a friday")
} else if ( day == 5) {
    console.log("It's a saturday")
} else if ( day == 6) {
    console.log("It's a sunday")
} else {
    console.log("Invalid date")
}