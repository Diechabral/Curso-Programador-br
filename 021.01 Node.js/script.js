let args = process.argv.slice(2);

console.log(args);

let a = args[0];
let b = args[1];
let c = soma(a, b);

function soma(x, y) {
    return x + y;
}

console.log(c);
