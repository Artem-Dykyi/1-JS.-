// const logItemsTest = logItems(friensLogItem) {
// let friensLogItem = ["Mango", "Poly", "Ajax"]
// for (let i = 0; i < friensLogItem.length; i++) {

// messageFriensLog = 1
// mesResuFritnLog += mesResuFritnLog
// console.log(mesResuFritnLog)
// return mesResuFritnLog
// }
// }



const logItemsName = ["Mango", "Poly", "Ajax"]

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`)
    }
}

logItems(logItemsName )

////////////////////////////////////////////////////////////


// const fixPriceEngravinCalc = 20
// const calculateEngravinPrice = function(messge, pricePerWord) {
//     const bigMessageCalc = prompt("WOrd write").split("")
//     const fullMessageCalcu = bigMessageCalc.length
//     console.log(fullMessageCalcu)
//     return messge * pricePerWord
// };

// console.log(calculateEngravinPrice(4, fixPriceEngravinCalc))

// я не памятаю як помножити довжину масиву на число(якщо це можна) 
//після того як я зможу це зробити розвяжу задажу

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

// якщо перщий поділ спліт більший залишаємо якшо менщий пропускаємо 
// поділення на слова та знаходження довжини кожного слова після цього порівнняння цих слів з іншими
const inputSomeTextFindLogest = prompt("Введіть речення - скажемо найдовше слово")

console.log(findLogestWord(inputSomeTextFindLogest))

/////////////////////////////////////////////////////


// якщо більше 40 символів не виводити 


const formatString = function (string) {
    for (let i = 0; i < string.length; i++) {
        if (string.length <= 40)
            console.log(string)
    else  {
        console.log("big nizh 40")
    }
    return string
}
}

console.log(formatString("jfffffkkkkkkkkkkkkkkkkkkkkkklllllllllllllllllllllllllk"))

// його нада зробити так щоб воно обрізалось і додавало ... але я не памятаю як це робити



const formatStringSecond = function(messge) {
    return messge.includes("spam") || messge.includes("sale")
}
console.log(formatStringSecond("spam is"))
console.log(formatStringSecond("sddddaled is"))



