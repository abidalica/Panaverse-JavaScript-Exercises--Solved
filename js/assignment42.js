// start writing your code here. When you are done, try saving it into assignment42.js file.

let magicianNames = ["David","Harry","Dynamo","David","Penn"]

let show_magicians = (names) => {
    console.log(names);
}

let make_great = (names) => {
    for (let i = 0; i < names.length; i++) {
        names[i] = "The Great " + names[i];
    }
    console.log(names);  
}

console.log("Bfore great:")
show_magicians([...magicianNames]);
console.log("\nAfter great:")
make_great ([...magicianNames]);