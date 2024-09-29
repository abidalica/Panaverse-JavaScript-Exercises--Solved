// start writing your code here. When you are done, try saving it into assignment30.js file.


let userList = ["eric", "abdul", "scott", "admin", "tiger"];

userList.forEach(user => {
    if (user == "admin") {
        console.log("Hello admin, would you like to see a status report.");
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
});