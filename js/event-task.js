const redInput = document.querySelector('input[type="radio"][name="color"][value="red"]');
const yellowInput = document.querySelector('input[type="radio"][name="color"][value="yellow"]');
const greenInput = document.querySelector('input[type="radio"][name="color"][value="green"]');
const mainPage = document.querySelector("body")

redInput.addEventListener("click", () => {
    mainPage.style.backgroundColor = "red"
 })

yellowInput.addEventListener("click", () => {
    mainPage.style.backgroundColor = "yellow";
});

greenInput.addEventListener("click", () => {
    mainPage.style.backgroundColor = "green";
});



const forName = document.querySelector(".formName")
const nameOutput = document.querySelector("#name-output");

forName.addEventListener("submit", (event) => {
    event.preventDefault() 
    const inputForNameData = {
        name: event.target.elements.userName.value,
    };
    console.log(inputForNameData)
    nameOutput.textContent = inputForNameData.name
})


const fontSizeControl = document.querySelector("#font-size-control"); 
const textSpan = document.querySelector("#text"); 

fontSizeControl.addEventListener("input", (event) => {
    const fontSize = event.target.value + "px"; 
    textSpan.style.fontSize = fontSize; 
});
