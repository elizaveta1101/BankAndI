function HiddenMenu () {
    const openBtn = document.querySelector('.header__nav__open'),
        closeBtn = document.querySelector('.header__nav__close'),
        menu=document.querySelector('.header__nav--hidden');
    console.log(openBtn);
    console.log(closeBtn);
    console.log(menu);

        
    openBtn.addEventListener('click', () => {
        menu.style.display = 'grid';
        console.log(menu);
    })
    closeBtn.addEventListener('click', () => {
        menu.style.display = 'none';
        console.log(menu);
    })
}

function scrolling() {
    const takePart = document.querySelector('.main__btn'),
        arrow = document.querySelector('.main__arrow'),
        about = document.querySelector('.about'),
        form = document.querySelector('.registration');

    takePart.addEventListener('click', () => {
        form.scrollIntoView({block: "center", inline: "center"});
    })
    arrow.addEventListener('click', () => {
        about.scrollIntoView({block: "center", inline: "center"});
    })
}

let phone = document.getElementById("phone");
let phoneMask = new Inputmask("+7([9]{3})[9]{3}-[9]{2}-[9]{2}");
phoneMask.mask(phone);

HiddenMenu();
scrolling();