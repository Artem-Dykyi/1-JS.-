const firstUser = {
    firName: "Roma",
    firLastName: "Cepol",
    firHobby: "Football",
    firSubscription: true,

}

const {firName, firLastName, firHobby, firSubscription} = firstUser

firstUser.mood = "happy"
firstUser.firHobby = "skydiving"
firstUser.firSubscription = false
console.log(firstUser)

const firUserKey = Object.keys(firstUser) 
console.log(firUserKey)


for (const key of Object.keys(firstUser)) {
    console.log(`${key}: ${firstUser[key]}`);
}

////////////////////////////////////////////2


const user2 = {
    name: "Soda",
    age: 45,
    favorColor: "red",

    countProps(obj) {
        sum = user2.lenght
        return sum
    }
}
console.log(user2.lenght)

const {name, age, favorColor} = user2

/////////////////////////////////////////////3

const userThree = {
    bob: 7,
    floo: 3,
    skot: 5,
    jim: 8,
    domkrat: 4,



    findBestEmployee(employees) {
        let anyKeys = Object.keys(userThree);
        let bestJob = 0
        let bestEmployee = ""
        for (const key of anyKeys) {
            if (userThree[key] > bestJob) {
                bestJob = userThree[key]
                bestEmployee = key
            } 
        }
        
        console.log(`imya ${bestEmployee}, snachenna: ${bestJob}`);
    }
}

const {bob, floo, skot, jim, domkrat} = userThree


userThree.findBestEmployee();


////////////////////////////////////////////4

const salaryWork = {
    andre: 1800,
    boba: 2500,
    nimuy: 1600,
    pedro: 2400,

    countTotalSalary(employees) {
        const anySalary = Object.values(salaryWork)
        let fullSalary = 0
        for (const profit of anySalary) {
                fullSalary += profit
        }
        return fullSalary
    }
}

const {andre, boba, nimuy, pedro} = salaryWork

console.log(salaryWork.countTotalSalary())
// в мене правильна відповідь є і вибиває весь код 
salaryWork.countTotalSalary() 
// console.log(fullSalary)

///////////////////////////////////////////////////

const frutsProp = [
    {
        apple: "green", 
        banana: "yellow",
    },
    {
        watermelon: "red", 
        peach: "orange",
    },
    {
        pinapple: "green", 
        strawberry: "pink", 
    },
]

const [fruitGroup1, fruitGroup2, fruitGroup3] = frutsProp;

const { apple, banana } = fruitGroup1;
const { watermelon, peach } = fruitGroup2;
const { pinapple, strawberry } = fruitGroup3;

const getAllPropValues = function(arr, prop) {
    let fullListFrut = []
    for (const frut of frutsProp) {
        if (prop in frut) {
            fullListFrut.push(frut[prop]);
        }
    }

    return fullListFrut
   
}
console.log(getAllPropValues(frutsProp, "apple"))
console.log(getAllPropValues(frutsProp, "peach"))


//////////////////////////////////////////////////

const productSale = [
    {name: "dog", price: 140, quantity: 2},
    {name: "cat", price: 200, quantity: 3},
    {name: "fish", price: 350, quantity: 4},
]

const [product1, product2, product3] = productSale;

const { name: name1, price: price1, quantity: quantity1 } = product1;
const { name: name2, price: price2, quantity: quantity2 } = product2;
const { name: name3, price: price3, quantity: quantity3 } = product3;


const calculateTotalPrice = function(allProdcuts, productName) {
    let totalPrice = 0
    for (const product of productSale) {
        if (productName === product.name) {
            totalPrice = product.price * product.quantity
        }
    }
    return totalPrice
}
console.log(calculateTotalPrice(productSale, "cat"))
