'use strict'

function hamburgerMenu () {
    const icon = document.querySelector('.hamburger');
    const navigation = document.querySelector('nav');
    icon.addEventListener('click', () => {
        navigation.classList.toggle('view-mobile');
    })
    window.addEventListener('resize', () => {
        document.documentElement.clientWidth >= 768 && navigation.classList.remove('view-mobile');
    });
}

hamburgerMenu()

console.log('Score: "120/120"')