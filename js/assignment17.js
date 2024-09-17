// start writing your code here. When you are done, try saving it into assignment17.js file.

// start writing your code here. When you are done, try saving it into assignment16.js file.

// assignment # 15

let guestList = ["Alan Turing", "Ada Lovelace","Elon Musk"];

// replace last name on the list with a new name.
guestList[guestList.length - 1] = "Albert Einstein";

// assignment # 16

// add a name at the begining
guestList.unshift("Nikola Tesla");

// add a name in the middle
let centerOfArray = guestList.length / 2;
guestList.splice(centerOfArray,0,"Steve Jobs");

// add a name at the end
guestList.push("Bill Gates");

// msg for TWO guests only.

console.log("We regret to inform that we can invite only two people for dinner\n");
let removedGuest;
for (let i = guestList.length; i > 2; i--) {
    removedGuest = guestList.pop();
    console.log(`${removedGuest}, we won't be able to invite you.`)
}
console.log(`\n`);
guestList.forEach(guestList => {
    console.log(`${guestList}, I'd love to have you on dinner.`);
});

guestList = [];

console.log(`${guestList}`);