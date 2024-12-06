const mainBtn = document.querySelector(".button-test")
console.log(mainBtn)

const mainText = document.querySelector(".p-test")
console.log(mainText)

const twoMainBtn = mainBtn.textContent = mainText.textContent
console.log(twoMainBtn)

//////////////////////////////////////////////////////////
const fotoFox = document.querySelector(".main-img-fox")
fotoFox.src = "https://cats.com/wp-content/uploads/2022/04/beautiful-white-cat-breed.jpg"
fotoFox.alt = "white-cat"
console.log(fotoFox)

//////////////////////////////////////////////////////////
// трохи туплю як звернутись до хреф і його замінити 

const spicyFoto = document.querySelector("spicy-food-red")
// spicyFoto.alt = "red-peper"
///////////////////////////////////////////////////////////
const firstItem = document.querySelector('ul li');
firstItem.textContent = "томат";
console.log(firstItem)

const fuullList = document.querySelector('ul');
console.log(fuullList)
