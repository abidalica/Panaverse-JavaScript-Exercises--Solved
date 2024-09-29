// start writing your code here. When you are done, try saving it into assignment15.js file.

// assignment # 14
let guestList = ["Alan Turing", "Ada Lovelace", "Elon Musk"];

let [guest1, guest2, guest3] = guestList;

console.log(`${guest1}, I’d be honored if you could join me for dinner.`);
console.log(`${guest2}, it would be a privilege to have you at dinner.`);
console.log(`${guest3},  I’d love to have you join me for dinner.`);


// assignment # 15

console.log(`We regret to inform that ${guest3} won't be able to make it.`);

guestList = guestList.map(name => {
    if (name == "Elon Musk") {
        return "Albert Einstein"
    } else {
        return name
    }
})

guest3 = guestList[2];

console.log(`${guest3}, we'd be happy to have you at dinner.`)