const nav = document.querySelector('.nav')
const menuBtn = document.querySelector('.menu-btn')
const menuImg = menuBtn.firstChild
const dropdown = document.querySelector('.dropdwn-info')

const shiftWindow = () => scrollBy(0, -140)
if (location.hash) shiftWindow()
window.addEventListener('hashchange', shiftWindow)


menuBtn.addEventListener('click', (e) => {
    e.preventDefault
    if (dropdown.style.display === 'none') {
        menuImg.src = 'img/close-btn.png'
        dropdown.style.display = 'block'
    } else {
        menuImg.src = 'img/menu-btn.png'
        dropdown.style.display = 'none'
    }
})
