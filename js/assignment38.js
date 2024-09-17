// start writing your code here. When you are done, try saving it into assignment38.js file.

const describe_city = (city = "Karachi", country = "Pakistan") => {
    console.log(`The City ${city} is in ${country}.`)
};

console.log("Default city default country");
describe_city();
console.log("\nCustom city default country");
describe_city("Hyderabad");
console.log("\nCustom city custom country");
describe_city("Paris","France");