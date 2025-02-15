document.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("box");
  
    const moveBox = _.debounce((x, y) => {
      box.style.transform = `translate(${x}px, ${y}px)`;
    }, 50); 
  
    document.addEventListener("mousemove", (event) => {
      moveBox(event.clientX, event.clientY);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".slider__input")
    const img = document.querySelector(".slider__image")

    const sizeImg = _.debounce((size) => {
        img.style.width = `${size}px`;
        img.style.height = `${size}px`;
    }, 200)

    slider.addEventListener("input", (event) => {
        sizeImg(event.target.value);
      });
  })

  