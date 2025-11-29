document.addEventListener('DOMContentLoaded', ()=> {
    // Мобильное меню начало
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', ()=> {
        header.classList.toggle('menu__active');
    });
    // Мобильное меню конец
    //Модальное окно начало
    const popup = document.querySelector('.popup');
    const openModal = document.querySelectorAll('.open-modal');

    function showModal() {
        popup.classList.remove('close-modal');
        popup.classList.add('open-modal');
        document.body.style.overflow = 'hidden';
    }
    function closeModal () {
        popup.classList.remove('open-modal');
        popup.classList.add('close-modal');
        document.body.style.overflow = '';
    }
    openModal.forEach(btn => {
        btn.addEventListener('click', showModal)
    });
    popup.addEventListener('click', (e)=> {
        if(e.target == popup || e.target.classList.contains('popup__header-close')) {
            closeModal();
        }
    });
    window.addEventListener('keydown', (e)=> {
        if(e.code === 'Escape' || e.target.classList.contains('open-modal')) {
            closeModal();
        }
    })
    //Модальное окно конец

})