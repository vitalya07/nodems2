document.addEventListener('DOMContentLoaded', ()=> {
    new Swiper ('.reviews__swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.reviews__button-next',
            prevEl: '.reviews__button-prev',
        },
        
        breakPoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
            slidesPerView: 2,
            spaceBetween: 10,
            },
            // Когда ширина экрана <= 768px
            768: {
            slidesPerView: 2,
            spaceBetween: 10,
            },
            // Когда ширина экрана <= 480px
            480: {
            slidesPerView: 1,
            spaceBetween: 0,
            }
        }
    })
})