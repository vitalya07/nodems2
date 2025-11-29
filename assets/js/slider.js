document.addEventListener('DOMContentLoaded', ()=> {
    new Swiper ('.reviews__swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.reviews__button-next',
            prevEl: '.reviews__button-prev',
        },
        slidesPerView: 3,
        spaceBetween: 20,
    })
})