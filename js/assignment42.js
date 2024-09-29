// start writing your code here. When you are done, try saving it into assignment42.js file.

let magicianNames = ["David", "Harry", "Dynamo", "David", "Penn"]

let show_magicians = (names) => {
    console.log(names);
}

let make_great = (names) => {
    names = names.map(name => {
        return name + " the great"
    })
    console.log(names);
}

console.log("Bfore great:")
show_magicians([magicianNames]);
console.log("\nAfter great:")
make_great([...magicianNames]);