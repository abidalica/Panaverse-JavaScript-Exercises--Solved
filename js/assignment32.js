// start writing your code here. When you are done, try saving it into assignment32.js file.

let current_users = ["admin", "john_doe", "jane_smith", "michael", "susan"];
let new_users = ["john_doe", "alex", "michael", "rachel", "ADMIN"];

// please enter a new username, this one has already been taken.
// this username is available.

let current_users_tmp = current_users.map(curUser => curUser.toUpperCase());
let new_users_tmp = new_users.map(newUser => newUser.toUpperCase());

for (let i = 0; i < new_users.length; i++) {
    
    if (current_users_tmp.indexOf(new_users_tmp[i]) == -1) {
        console.log(`The user ${new_users[i]} is available.`)
    } else {
        console.log(`The user ${new_users[i]} has already been taken.`)
    }
}