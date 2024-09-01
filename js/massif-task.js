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



const maxNumber = [1, 2, 10, 4, 5, 33, 7, 8, 9, 12];
// const maxNumberResult = maxNumber.Math.max(maxNumber)
const maxNumberResult = Math.max(...maxNumber)
console.log(maxNumberResult)
// цей приклад я шукав в інтернкті так як не міг зрозуміти 
// чому не працює Math.max(maxNumber) а потім побачив що для 
// того щоб звернутись потрібно використати ... 



const divideNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < divideNumber.length; i++) {
    if (divideNumber[i] % 2 === 0) {
        console.log(divideNumber[i])
    }
}


