// const manyPhoto = document.querySelectorAll(".observer-img")
// const options = {

// }

// const showPhoto = (manyPhoto, observer) => {
//     manyPhoto.forEach((photo) => {
//         if(photo.isIntersecting) {
//             photo.classList.add("show")
//         }
//     })
// }

// const observer = new IntersectionObserver(showPhoto, options)

// observer.observe(manyPhoto)

const manyPhoto = document.querySelectorAll(".observer-img");

const options = {
};

const showPhoto = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src; 
            img.classList.add("show"); 
            observer.unobserve(img); 
        }
    });
};

const observer = new IntersectionObserver(showPhoto, options);


manyPhoto.forEach((photo) => observer.observe(photo));