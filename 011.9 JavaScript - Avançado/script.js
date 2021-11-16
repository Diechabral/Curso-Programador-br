var person = {
    name: "Diego Cabral",
    age: 28,
}
var contact = {
    phone: 81985304855,
    email: " caontact@gmail.com"

}

var copy = { ...person, ...contact }
copy.age = 88;

console.log(person);
console.log(copy)