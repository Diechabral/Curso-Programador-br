
function newStudents(name, age) {
    return { name, age }
}
let students = [
    newStudents("Mario", 23),
    newStudents("Diego", 45),
    newStudents("Marcela", 29),
    newStudents("Flavio", 25),
    newStudents("Roberto", 35)
]
function areUnder30(student) {
    return student.age < 30
}
// console.log(students.filter(areUnder30))
function nameAndAge(student) {
    return student.name + " is " + student.age + " years old"
}
console.log(students.map(nameAndAge))