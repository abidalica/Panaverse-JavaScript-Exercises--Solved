// start writing your code here. When you are done, try saving it into assignment33.js file.

let ordNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

ordNums.forEach(num => {
    if (num == 1) {
        console.log(`${num}st`);
    } else if (num == 2) {
        console.log(`${num}nd`);
    } else if (num == 3) {
        console.log(`${num}rd`);
    } else {
        console.log(`${num}th`);
    }
});