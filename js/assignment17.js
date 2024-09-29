// start writing your code here. When you are done, try saving it into assignment16.js file.

// assignment # 16

let guestList = ["Alan Turing", "Ada Lovelace", "Albert Einstein"];

// add a new guest at the begining
guestList.unshift("Nikola Tesla");

// add a name in the middle
let centerOfArray = guestList.length / 2;

guestList.splice(centerOfArray, 0, "Steve Jobs");

// add a name at the end
guestList.push("Bill Gates");

console.log(`We regret to inform you that we can only accommodate TWO gusts at the dinner.`)

// remove all except two
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`${removedGuest}, we’re sorry you can’t invite them to dinner.`)
}

// invite remaining 2
guestList.forEach(guest => {
    console.log(`${guest}, We would love to have you on dinner.`)
});

// remove all
do {
    let removedGuest = guestList.shift();
} while (guestList.length > 0);

console.log(`${guestList}`);