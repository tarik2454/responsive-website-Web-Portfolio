
// -- slider 
new Swiper('.swiper1', {
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: 2,
    spaceBetween: 500,
    centeredSlides: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


new Swiper('.swiper2', {
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: 2,
    spaceBetween: 500,
    centeredSlides: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const hed = document.querySelector('.header').offsetHeight;
console.log(hed)