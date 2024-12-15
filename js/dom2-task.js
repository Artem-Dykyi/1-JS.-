const categories = document.querySelector("#categories")
const enyCategories = categories.querySelectorAll(".item")
console.log(`У списку ${enyCategories.length} категорії`)


enyCategories.forEach(item => {
    const nameCatego = item.querySelector("h2").textContent;
    const categoCount = item.querySelectorAll("ul li").length;

    console.log(`Категорія: ${nameCatego}`);
    console.log(`Кількість елементів: ${categoCount}`);
})



const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
   ];

const ingredientsList = document.querySelector("#ingredients")
const oneIngidient = ingredients.map(ingridient => {
    const newLi = document.createElement("li")
    newLi.textContent = ingridient; 
    return newLi;
})

console.log(ingredientsList.append(...oneIngidient))




// const listElement = document.createElement("ul") 

// cats.forEach(({breed, photo}) => {
//     listElement.insertAdjacentHTML(
//         "beforeend", 
//         `<li>
//             <article>
//                 <h2>${breed}</h2>
//                 <img src = "${photo}" alt="${breed}"/>
//             </article>
//         </li>`
//     )
// })
// console.log(listElement)
// document.querySelector("body").prepend(listElement)

const images = [
    {
     url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    },
   ];


   const listGalary = document.querySelector("#gallery")

   images.forEach(({url, alt}) => {
    listGalary.insertAdjacentHTML(
        "beforeend", 
        `<li>
                 <img src = "${url}" alt="${alt}"/>
         </li>`
    )
   })
    // document.querySelector("#gallery").append(listGalary) //чомусь не додається 



//////////////////////////////////


const minusBtn = document.querySelector('[data-action="decrement"]')
const plusBtn = document.querySelector('[data-action="increment"]')
const valueElement = document.querySelector('#value');

minusBtn.addEventListener("click", () => {
    let currentValue = parseInt(valueElement.textContent, 0); 
    currentValue -= 1;
    valueElement.textContent = currentValue;
 })

plusBtn.addEventListener("click", () => {
    let currentValue = parseInt(valueElement.textContent, 0); 
    currentValue += 1; 
    valueElement.textContent = currentValue;
 })