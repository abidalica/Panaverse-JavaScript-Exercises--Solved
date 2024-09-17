// start writing your code here. When you are done, try saving it into assignment18.js file.

let placesToVisit = ["Place-3" , "Place-1", "Place-4", "Place-5", "Place-2"];
console.log("Before change")
console.log(`original:\t${[...placesToVisit]}`);
console.log(`Alphabetical:\t${[...placesToVisit].sort()}`);
console.log(`original:\t${[...placesToVisit]}`);
console.log(`Reverse:\t${[...placesToVisit].sort().reverse()}`);
console.log(`original:\t${[...placesToVisit]}`);
console.log("\nAfter change")
placesToVisit.reverse();
console.log(`Reverse:\t${[...placesToVisit]}`);
placesToVisit.reverse();
console.log(`original:\t${[...placesToVisit]}`);
placesToVisit.sort();
console.log(`Alphabetical:\t${[...placesToVisit]}`);
placesToVisit.sort().reverse();
console.log(`Reverse:\t${[...placesToVisit]}`);