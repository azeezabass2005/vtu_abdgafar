const menu = document.querySelector('.menu')
const closeMenu = document.querySelector('.close')
const navBar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
    menu.classList.add('none')
    closeMenu.classList.add('flex')
    navBar.classList.add('flex')
    menu.classList.remove('flex')
    closeMenu.classList.remove('none')
    navBar.classList.remove('none')
})

closeMenu.addEventListener('click', () => {
    closeMenu.classList.add('none')
    navBar.classList.add('none')
    menu.classList.add('flex')
    closeMenu.classList.remove('flex')
    navBar.classList.remove('flex')
    menu.classList.remove('none')
})