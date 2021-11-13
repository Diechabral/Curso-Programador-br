function speakGeneric() {
    console.log(this.sound)
}
let dog = {
    sound: "woof",
    speak: speakGeneric
}



let cat = {
    sound: "meow",
    speak: speakGeneric
}

// dog.speak();
// cat.speak();



let bindedFunction = speakGeneric.bind(cat)

bindedFunction();