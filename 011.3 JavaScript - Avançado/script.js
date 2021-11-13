// let double = function (n) { return 2 * n };




// function hi() {
//     console.log("Hi!")
// }
// function bye() {
//     console.log("Bye!")
// }

// function greating(s, name) {
//     s();
//     console.log(name);

// }

// greating(bye, "Diego");


let users = ["Diego", "Alexandre", "Renato"];

function insertUsers(name, callback) {
    setTimeout(() => {
        users.push(name);
        callback();
    }, 1000);


}
function listUsers() {
    console.log(users)
}

insertUsers("Diego", listUsers);

listUsers();