let drinks
const select = prompt("Введіть напій який ви хочете отримати можете обрати - кава чай чи сік")

switch (select) {
    case "сік":
        drinks = "сік";
        break;

    case "чай":
        drinks = "чай";
        break;
    
    case "кава":
        drinks = "кава";
        break;
    default:
        alert("Ви не вибрали нічого")
}
alert(`Ви обрали ${drinks}`)




let dayWeeks 
const dayOfWeek = prompt("Введіть день тижня та ми скажемо чи ви працюєте")

switch (dayOfWeek) {
    case "понеділок":
        dayWeeks = "працюєте";
        break;
    case "вівторок":
        dayWeeks = "працюєте";
        break;
    case "середа":
        dayWeeks = "працюєте";
        break;
    case "четвер":
        dayWeeks = "працюєте";
        break;
    case "пятниця":
        dayWeeks = "працюєте";
        break;
    case "субота":
        dayWeeks = "вихідний";
        break;
    case "неділя":
        dayWeeks = "вихідний";
        break;
    default:
            alert("Ви не вибрали день тижня")
}

alert(`Ви ${dayWeeks} цього дня` )

// Тут я теж можу скоротити код на 10-12 рядків (дні тижня)




let choiceMonth 
const seasonMonth = prompt("Введіть будь який місяць та ми скажемо що це за пора року")

switch (seasonMonth) {
    case "грудень":
    case "січень":
    case "лютий":
        choiceMonth = "зима";
        break;

    case "березень":
    case "квітень":
    case "травень":
        choiceMonth = "весна";
        break;

    case "червень":
    case "липень":
    case "серпень":
        choiceMonth = "літо";
        break;

    case "вересень":
    case "жовтень":
    case "листопад":
        choiceMonth = "осінь";
        break;
    default:
        alert("Ви не вибрали місяць")
}

alert(`Пора раку ${choiceMonth}` )


let numberQuantity
const quantityMonth = prompt("Введіть номер місяця та ми скажемо скільки там днів")

switch (quantityMonth) {
    case "2":
        numberQuantity = "29";
        break;

    case "4":
    case "6":
    case "9":
    case "11":
        numberQuantity = "30";
        break;
    
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
        numberQuantity = "31";
        break;
    default:
        alert("Такого місяця не існує");
}

alert(`Кількість днів в цьому місяці ${numberQuantity}` );


let colorMove
const moveAboutColor = prompt("Введідь колір світлофору (червоний, жовтий, зелений) та скажемо що вам потрібно робити")

switch (moveAboutColor) {
    case "червоний":
        colorMove = "стоп";
        break;

    case "жовтий":
        colorMove = "чекати";
        break;

    case "зелений":
        colorMove = "йти";
        break;
    default:
        alert("Ви ввели невірний колір");
}

alert(`Колір вказує тобі ${colorMove}` );

// без 6 завдання 
