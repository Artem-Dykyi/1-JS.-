"use strict"
const myAge = 15;
console.log(myAge);

const myName = "Artem Dykyi";
console.log(myName);

const isStudent = true;
console.log("Чи є студентом?", isStudent);

const myString = "Never give up";
console.log(myString);

let myNumber = 1;
myNumber = myNumber + 10;
console.log(myNumber);

const myNull = null;
console.log(myNull);

const message = "Вітаємо на нашому сайті";
// alert(message);
// confirm("Ви згідні користуватись цим сайтом?"); 
const clientName = prompt("Введіть ваше ім'я?");
console.log(clientName);




let userConfirmation = confirm("Ви впевнені, що хочете підтвердити дію?");

if (userConfirmation) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}