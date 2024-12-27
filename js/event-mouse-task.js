const scrollGallery = document.querySelector('.gallery');

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        scrollGallery.scrollBy({ left: 50});
    } else if (event.key === 'ArrowLeft') {
        scrollGallery.scrollBy({ left: -50});
    }
});



const controls = document.querySelector("#controls")
const countElement = document.querySelector(".countElement")
const createBtn = document.querySelector('[data-action="render"]')
const deleteBtn = document.querySelector('[data-action="destroy"]')
const createBox = document.querySelector("#boxes")


function randomColor() {
    const redValue = (Math.round (Math.random() * (255 - 0) + 0));
    const greenValue = (Math.round (Math.random() * (255 - 0) + 0));
    const blueValue = (Math.round (Math.random() * (255 - 0) + 0));
    return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}


function createBoxes(amount) {
    const boxes = []
    let size = 30

    for(let i = 0; i < amount; i++) {
        const box = document.createElement("div")
        box.style.backgroundColor = randomColor()
        box.style.width = `${size}px`
        box.style.height = `${size}px`
        boxes.push(box);
        size += 10;
    }
    createBox.append(...boxes)
}

function destroyBoxes(){
    createBox.innerHTML = ""
}

createBtn.addEventListener("click", () => {
    const checkAmount = Number(countElement.value)
    if (checkAmount > 0) {
        createBoxes(checkAmount);
    }
})

deleteBtn.addEventListener("click", () => {
    destroyBoxes()
})



