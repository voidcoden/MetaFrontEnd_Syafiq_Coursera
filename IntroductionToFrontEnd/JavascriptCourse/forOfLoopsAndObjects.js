// for of and for in loops

const car = {
    engine: true,
    steering: true,
    speed: "slow"
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

console.log("----------- For-in is unrealiable --------");
for (prop in sportsCar) {
    console.log(prop);
}
console.log("Iterating over object AND its prototype!");

console.log("--------- For-of is realible ----------");
for (prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop]);
}
console.log("Iterating over object's OWN PROPERTIES only!")