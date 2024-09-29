const bankAccount = {
    ownerName: "Artem",
    accountNumber: 20,
    balance: 1000,

    deposit () {
        const howMoneyAdd = prompt("Скільки готівки додати?")
        this.balance += Number(howMoneyAdd)
        console.log(`ви додали до балану ${howMoneyAdd}, ваш баланс${this.balance}`)
    },
    withdraw () {
        const howMoneyPull = prompt("Скільки готівки зняти?")
        this.balance -= Number(howMoneyPull)
        console.log(`ви зняли з балану ${howMoneyPull}, ваш баланс${this.balance}`)
    }
}
bankAccount.deposit()
bankAccount.withdraw()


////////////////////////////////////


const todayWeather = {
    temperature: 0,
    humidity: 8,
    windSpeed: 12,

    chekTemp () {
        const messageTemp = prompt("Введіть темперетуру за вікном")
        if(messageTemp > todayWeather.temperature) {
            console.log(false)
        } else {                
            console.log(true)
        }
    },

    chekTempMessage () {
        if (this.chekTemp === false){
            console.log(`false температура білша 0`)
        } else {
            console.log(`true температура менша 0`)
        }
    }
}
todayWeather.chekTemp()
todayWeather.chekTempMessage()

// не розумію чому в (42 рядку) завжди true 

//////////////////////////////////////////////

const erUser = {
    nameEr: "Vilra",
    erEmail: "vilra@2gmail.com",
    erPassword: "dog509",

    erLogin() {
        const erMessage = prompt("Введіть email password")
        if (this.erEmail && this.erPassword === erMessage) {
            console.log("email password введені праильно")
        } else {
            console.log("email password введені НЕ праильно")
        }
    }
}
erUser.erLogin()

// працює але не працює коректо так як я хочу 
// або робити щоб почерзі вводити імеіл і пароль або змінювати щось там


/////////////////////

const movie = {
    title: "Веселі курі",
    director: "Gonick",
    year: 2012,
    rating: 10,

    chekRating () {
        if(this.rating > 8) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}
movie.chekRating()

// я не знаю як його зробити зеленим саме тут 