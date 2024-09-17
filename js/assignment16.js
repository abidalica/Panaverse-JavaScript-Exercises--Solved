// start writing your code here. When you are done, try saving it into assignment16.js file.

// assignment # 15

let guestList = ["Alan Turing", "Ada Lovelace","Elon Musk"];

// replace last name on the list with a new name.
guestList[guestList.length - 1] = "Albert Einstein";

// assignment # 16
// inform that bigger table is available
console.log(`We are delightful to inform you that THREE more guest are coming.`);

// add a name at the begining
guestList.unshift("Nikola Tesla");

// add a name in the middle
let centerOfArray = guestList.length / 2;
guestList.splice(centerOfArray,0,"Steve Jobs");

// add a name at the end
guestList.push("Bill Gates");

// print out msgs
console.log(`${guestList[0]}, I’d be honored if you could join me for dinner.`);
console.log(`${guestList[1]}, it would be a privilege to have you at dinner.`);
console.log(`${guestList[2]},  I’d love to have you join me for dinner.`);
console.log(`${guestList[3]},  I’d love to have you join me for dinner.`);
console.log(`${guestList[4]},  I’d love to have you join me for dinner.`);
console.log(`${guestList[5]},  I’d love to have you join me for dinner.`);