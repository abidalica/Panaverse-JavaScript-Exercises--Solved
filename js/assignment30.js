// start writing your code here. When you are done, try saving it into assignment30.js file.


let userList = ["eric","abdul","scott","admin","tiger"];


for (let i = 0; i < userList.length; i++) {
    let userName = userList[i];
    if (userName == "admin") {
        console.log("Hello admin, would you like to see a status report.");
    } else {
        console.log(`Hello ${userList[i]}, thank you for logging in again.`)
    }
}