const firstUser = {
    firName: "Roma",
    firLastName: "Cepol",
    firHobby: "Football",
    firSubscription: true,

}

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
