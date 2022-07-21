
// -- navToggle
const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('#nav');
const navLink = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
});

navLink.forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        navLink.forEach(function(item) {
            item.classList.remove('active');
        })    
        this.classList.add('active');

        setTimeout(function() {
            navToggle.classList.remove('active');
            nav.classList.remove('active');
        }, 400);    
    });  
});


// -- header fixed
const header = document.querySelector('#header');
const intro = document.querySelector('#intro');
const introH = intro.offsetHeight;

window.onscroll = function() {
    if (window.pageYOffset >= introH - 50) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
};


// -- scroll to
const scrollBtn = document.querySelectorAll('[data-scroll]');

scrollBtn.forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        const scrollId = document.querySelector('#' + this.dataset.scroll);
        const scrollTop = scrollId.offsetTop - 50;

        window.scrollTo({ top: scrollTop, behavior: 'smooth'});
    });
});


// -- filter 
const filterBtn = document.querySelectorAll('[data-filter]');
const dataCat = document.querySelectorAll('[data-cat]');
const worksNavItem = document.querySelectorAll('#worksNav a');

filterBtn.forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        worksNavItem.forEach(function(item) {
            item.addEventListener('click', function() {
                this.classList.add('active');
            });
            item.classList.remove('active');
        });

        const cat = this.dataset.filter;

        if(cat == 'ALL') {
            dataCat.forEach(function(item) {
                item.classList.remove('hide');
            });
        } else {
            dataCat.forEach(function(item) {
                const workCat = item.dataset.cat;
 
                if(workCat != cat) {
                    item.classList.add('hide');
                } else {
                    item.classList.remove('hide');
                }  
            });  
        };    
    });
});


// -- slider 
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

