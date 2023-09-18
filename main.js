//  variables/constants

const navbar = document.querySelector('nav');
const faqs = document.querySelectorAll('.faq');

//  add scroll effect to menu bar

window.addEventListener('scroll', () => {
    navbar.classList.toggle('window-scroll', window.scrollY > 0)
})

//  change faqs icons

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        const icon = faq.querySelector('.faq-icon i') 

            if (icon.className === 'uil uil-plus') {
                icon.className = 'uil uil-minus'
            } else {
                icon.className = 'uil uil-plus'
            }
        }
    )
})

// show and hide menu bar

const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

const openNav = () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
}

const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

menuBtn.addEventListener('click', openNav)
closeBtn.addEventListener('click', closeNav)


