const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.backdrop');

openModalBtn.addEventListener("click", () => {
    document.body.classList.add("show-modal");
});

closeModalBtn.addEventListener("click", () => {
    document.body.classList.remove("show-modal");
});

backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) {
        document.body.classList.remove("show-modal");
    }
});



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



const validationInput = document.querySelector("#validation-input")

validationInput.addEventListener("blur", () => {
    const requiredLength = parseInt(validationInput.getAttribute("data-length"));
    const inputLength = validationInput.value.length;

    if (inputLength === requiredLength) {
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
    }
     else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    }
    
})



const fontSizeControl = document.querySelector("#font-size-control"); 
const textSpan = document.querySelector("#text"); 

fontSizeControl.addEventListener("input", (event) => {
    const fontSize = event.target.value + "px"; 
    textSpan.style.fontSize = fontSize; 
});
