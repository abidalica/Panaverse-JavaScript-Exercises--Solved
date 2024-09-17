// start writing your code here. When you are done, try saving it into assignment39.js file.

const city_country = (city = "Lahore", country = "Pakistan") => {
    console.log(`${city}, ${country}.`)
};

console.log("Default city default country");
city_country();
console.log("\nCustom city default country");
city_country("Hyderabad");
console.log("\nCustom city custom country");
city_country("Paris","France");