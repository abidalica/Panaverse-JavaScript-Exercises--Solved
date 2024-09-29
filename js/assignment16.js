// start writing your code here. When you are done, try saving it into assignment16.js file.

// assignment # 15

let guestList = ["Alan Turing", "Ada Lovelace", "Albert Einstein"];


console.log(`Hello everybody, we just found a bigger table.`);

// add a new guest at the begining
guestList.unshift("Nikola Tesla");

// add a name in the middle
let centerOfArray = guestList.length / 2;

guestList.splice(centerOfArray, 0, "Steve Jobs");

// add a name at the end
guestList.push("Bill Gates");

console.log(`Three more guest will be joining us at the dinner.`)

// print out msgs
console.log(`${guestList[0]}, I’d be honored if you could join me for dinner.`);
console.log(`${guestList[1]}, it would be a privilege to have you at dinner.`);
console.log(`${guestList[2]},  I’d love to have you join me for dinner.`);
console.log(`${guestList[3]},  I’d love to have you join me for dinner.`);
console.log(`${guestList[4]},  I’d love to have you join me for dinner.`);
console.log(`${guestList[5]},  I’d love to have you join me for dinner.`);