const oneHello = () => {
    return console.log("Hello world")
}

console.log(oneHello())    


///////////////////////////////


const guessNum = () => {
    const doRandNum = Math.floor(Math.random() * 100) + 1
    let messageRanNum = prompt("Введіть число від 0 до 100")
    
    return doRandNum === Number(messageRanNum)
        ? `Число ${messageRanNum} співпало.`
        : `Число ${messageRanNum} не співпало. Правильне число ${doRandNum}`
    
}
console.log(guessNum())


//////////////////////////////////////
// я не розумію як це зробти (3)


const applyCallbackToEachEle = (arr, callback) => {
    const resultArray = []; 
    for (let i = 0; i < arr.length; i++) {
        resultArray.push(callback(arr[i])); 
    }
    return resultArray; 
}


const arr = [1, 2, 3, 4, 5];

const squareCallback = (num) => num * num;


const result = applyCallbackToEachEle(arr, squareCallback);
console.log(result); 

/////////////////////////////////////////////////////////
const calcDiscPrice = (price, discount, callback) =>{
const resultThis = price * discountWrite
const secondResult = price - resultThis
console.log(secondResult)
return resultThis

}
const discountWrite = 80 * 0.01




const showDiscPrice = (showDiscPrice) => {
    const messagePrice = `Знижка вийшла ${secondResult}`
    console.log(messagePrice)

    return messagePrice
}

console.log(calcDiscPrice (120, discountWrite, showDiscPrice))

// не розумію що не так і чому не виводить речення (55) 