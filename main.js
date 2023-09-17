const navbar = document.querySelector('nav');
const faqs = document.querySelectorAll('.faq');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('window-scroll', window.scrollY > 0)
})

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

