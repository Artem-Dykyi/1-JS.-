    const slider = document.querySelector(".slider__input")
    const img = document.querySelector(".slider__image")
    const box = document.getElementById("box");


    const imgSize = (event) => {
        const size = event.target.value + "px";
        img.style.width =`${size}`
        img.style.height =`${size}`
    }
    slider.addEventListener("input", _.debounce(imgSize, 50) )



    const moveBox = (event) => {
        box.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
    }

    document.addEventListener("mousemove", _.debounce(moveBox, 50))



    