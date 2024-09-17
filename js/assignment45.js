// start writing your code here. When you are done, try saving it into assignment45.js file.

const makeCar = (manufacturer,model,...options) => {
    let car = {
        manufacturer: manufacturer,
        model: model
    }
    options.forEach(option => {
        Object.assign(car,option);
    }
    )

    return car;
}

let car1 = makeCar("Toyota", "Corolla", {color: "Blue"}, {year: 2020}, {sunroof: true});
let car2 = makeCar("Tesla", "Model S", {color: "White"}, {autopilot: true}, {battery: "100 kWh"});


console.log("car1");
console.log(`${car1.manufacturer} ${car1.model} ${car1.color} ${car1.year} ${car1.sunroof}`);

console.log("\ncar2");
console.log(`${car2.manufacturer} ${car2.model} ${car2.color} ${car2.autopilot} ${car2.battery}`);
