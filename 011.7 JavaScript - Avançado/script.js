// filter, map, arrays

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
// for (let student of students) {
//     if (student.age < 30) {
//         console.log(student.name)
//     }
// }

function areUnder30(student) {
    return student.age < 30
}
function areOver30(student) {
    return student.age > 30
}

function filter(callback) {
    let studentsFiltered = [];
    for (let student of this) {
        if (callback(student)) {
            studentsFiltered.push(student)
        }
    }

    return studentsFiltered;
}

students.filter = filter

console.log(students.filter(areUnder30))