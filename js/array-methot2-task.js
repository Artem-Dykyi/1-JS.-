const computerGame = [
    {namePlayer: "Gols", age: 17, eyeColor: "blue", gender: "male", isActice: true, email: "gols12@gmail.com"},
    {namePlayer: "Rick", age: 43, eyeColor: "green", gender: "male", isActice: false, email: "rick77@gmail.com"},
    {namePlayer: "Masha", age: 22, eyeColor: "dark", gender: "female", isActice: false, email: "masha20@gmail.com"},
    {namePlayer: "Merry", age: 34, eyeColor: "green", gender: "female", isActice: true, email: "merry48@gmail.com"},
]

const compGameName = computerGame.map((person) => person.namePlayer) //1
console.log(compGameName)

const colorGlass = computerGame.filter(person => person.eyeColor === "green") //2
console.log(colorGlass)

const genderPerson = computerGame.map((person) => person.gender) //3
console.log(genderPerson)

const notEctive = computerGame.filter(person => person.isActice === false) //4
console.log(notEctive)

const emailGame = (arr, emailPlayer) => computerGame.find(person => person.email === emailPlayer)//5
console.log(emailGame(computerGame, "merry48@gmail.com"))

const circsComp = computerGame.filter(person => person.age > 18 && person.age < 40) //6
console.log(circsComp)

// Зроби але 5 виводить все про цей рядок а мені потрібно тільки імя 