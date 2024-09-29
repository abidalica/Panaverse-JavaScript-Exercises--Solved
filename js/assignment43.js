// start writing your code here. When you are done, try saving it into assignment43.js file.

let magicianNames = ["David", "Harry", "Dynamo", "David", "Penn"]

let show_magicians = (names) => {
    console.log(names);
}

let make_great = (names) => {
    names = names.map(name => {
        return name + " the great"
    })

    return names;
}

show_magicians([...magicianNames]);

let magicianNamesGreat = make_great([...magicianNames]);

console.log(magicianNamesGreat)