

// let dobro = x => {

//     return (2 * x);
// }

// console.log(dobro(8))



// o Arrow não reconhece o Bind nem o this... ela reconheceria eles de forma global e não local no arrow.




let double = x => (2 * x);

console.log(double(3))




// let double = () => { console.log(this) }

// let number = {
//     x: 8,
//     d: double
// }
// double = double.bind(number)

// number.d();

