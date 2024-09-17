// start writing your code here. When you are done, try saving it into assignment37.js file.

const make_shirt = (tSize = "Large",tMsg = "I love JavaScript.") => {
    console.log(`Size:\t "${tSize}"\nMessage: "${tMsg}"`)
}

console.log("Default size with default message");
make_shirt();
console.log("\nCustom Size with default message");
make_shirt("Medium");
console.log("\nCustom Size with custom message");
make_shirt("Small","Happy Coding.");
