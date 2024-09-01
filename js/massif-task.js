const threeNumber = [1, 2, 3];
threeNumber[1] = 10;
console.log(threeNumber);



const addString = ["Kurul", "Artur", "Olena"]
addString[3] = "Stepan"
console.log(addString)



let sumResult = 0
const sumNumber = [1, 2, 22] 
for (let i = 0; i < sumNumber.length; i++) {
    sumResult += sumNumber[i] 
}
console.log(sumResult)



const fiveNumber = [1, 2, 3, 4, 5]
for (let i = 0; i < fiveNumber.length; i++) {
    console.log(fiveNumber[i])
}



const fiveString = ["Anna", "Olenka", "Petro", "Stepan", "Gost"]
for (let i = 0; i < fiveString.length; i++) {
    if (fiveString[i].length >= 5) {
        console.log(fiveString[i])
    } else {
        continue;
    }
}   
//  без else continue; теж працює, але не знаю чи коректно 



const everNumber = [1, 2, 10, 4, 5, 33, 7, 8, 9, 12];
let bigEverNum = 0;
for (let i = 0; i < everNumber.length; i ++) {
    if (everNumber[i] > bigEverNum) {
        bigEverNum = everNumber[i]
    } else {
        continue
    }
}
console.log(bigEverNum)


const divideNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < divideNumber.length; i++) {
    if (divideNumber[i] % 2 === 0) {
        console.log(divideNumber[i])
    }
}


