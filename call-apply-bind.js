let person1 = {
    name: "Sumit",
    age: 28
}

let person2 = {
    name: "Shibbi",
    age: 26
}

function showDetails(city) {
    console.log(`${this.name} is ${this.age} yrs old and lives in ${city}`);
}

showDetails.call(person1, "bangalore")
showDetails.apply(person2, ["Korba"])
let fn = showDetails.bind(person1, ["Pune"])
fn()