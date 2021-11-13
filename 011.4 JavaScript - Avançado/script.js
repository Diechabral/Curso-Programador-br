
let users = ["Diego", "Alexandre", "Renato"];

function insertUsers(name,) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            users.push(name);
            let error = true;
            if (!error) {
                resolve();
            } else {
                reject({ msg: "Something went wrong..." });
            }
        }, 1000);
    })
    return promise;
}
function listUsers() {
    console.log(users)
}
insertUsers("Diego")
    .then(listUsers)
    .catch((error) => {
        console.log(error.msg)
    });

