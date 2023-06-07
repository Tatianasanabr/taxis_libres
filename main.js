const sliderContainer = document.querySelector("home__slider--main_container");

setInterval(() => {
    sliderContainer.scrollBy({ left: sliderContainer.offsetWidth, behavior: "smooth"});
    
    if (sliderContainer.scrollLeft + sliderContainer.clientWidth >= sliderContainer.scrollWidth){
        sliderContainer.scrollTo({ left: 0, behavior: "smooth"});
    }
}, 3000);