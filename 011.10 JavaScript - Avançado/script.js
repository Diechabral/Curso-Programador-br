var student = {
    sin: 1234,
    name: "Diego",
    phone: 8544785,
    city: " Toronto"
}

var { ...copy } = student;
copy.sin = 6522
console.log(copy)
console.log(student)