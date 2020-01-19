const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav_links');
    const navs = document.querySelectorAll('.nav_links');

    menu.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
        
    });

    navs.forEach((link, index) => {
        link.style.animation = `navFade 0.5s ease forwards ${index/7}s`;
    });
}

const app = () => {
    navSlide();
}

app();