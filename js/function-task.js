const logItemsName = ["Mango", "Poly", "Ajax"]

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`)
    }
}

logItems(logItemsName )

////////////////////////////////////////////////////////////


const fixPriceEngravinCalc = 20
const calculateEngravinPrice = function(pricePerWord, messge) {
    return  pricePerWord * messge.length
};

console.log(calculateEngravinPrice(fixPriceEngravinCalc, "dd" ))

// таке просте завдання а я його дак довго розписував)

//////////////////////////////////////////////////////////

const findLogestWord = function(string) {
    const newArryFindLogest = string.split(" ")
    let longestWorldFindLoges = ""
    for (const oneWorldArryFind of newArryFindLogest) {
        if (oneWorldArryFind.length > longestWorldFindLoges.length)
            longestWorldFindLoges = oneWorldArryFind
        else {
            continue
        }
    } 
    return longestWorldFindLoges
}

const inputSomeTextFindLogest = prompt("Введіть речення - скажемо найдовше слово")
console.log(findLogestWord(inputSomeTextFindLogest))

/////////////////////////////////////////////////////

const formatString = function (string) {
    for (let i = 0; i < string.length; i++) {
        if (string.length <= 40)
        return string
    else  {
        console.log("big nizh 40")
        return string.slice(0, 40) + "..."
    }
    

}
}

console.log(formatString("jfffffkkkkkkwmmmmmmmssdddwwwwwwwwwwwwwwwwwwwwwdddd"))

///////////////////////////////////////////////////////

const formatStringSecond = function(messge) {
    return messge.includes("spam") || messge.includes("sale")
}
console.log(formatStringSecond("spam is"))
console.log(formatStringSecond("sddddaled is"))

//////////////////////////////////////////////////////////

let inputPleas = prompt("Введіть число")
console.log(inputPleas)

const pleasSumNumber = function(inputPleas) {
    
    let numbersPleas = []
    let totalPleas = 0
    for (let i = 0; i < inputPleas; i++) {
        totalPleas += numbersPleas[i]
    }
    console.log(totalPleas)
}

