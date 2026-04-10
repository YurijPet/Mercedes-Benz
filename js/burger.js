const burger = document.querySelector(".humburger-menu");
const menuElem = document.querySelector(".menu");

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active')
    burger.classList.toggle('humburger-men-active');
}

burger.addEventListener('click', () => {
    toggleMenu()
})