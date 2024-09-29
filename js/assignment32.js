// start writing your code here. When you are done, try saving it into assignment32.js file.

let current_users = ["admin", "john_doe", "jane_smith", "michael", "susan"];
let new_users = ["john_doe", "alex", "michael", "rachel", "ADMIN"];

for (let new_user of new_users) {

    let isUserAvailable = current_users.some(current_user => {
        return current_user.toLowerCase() === new_user.toLowerCase();
    })

    if (isUserAvailable == false) {
        console.log(`${new_user} is available.`);
    } else {
        console.log(`${new_user} has already been taken.`);
    }
}