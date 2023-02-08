const hamBtn= document.querySelector('.ham-area')
const navArea= document.querySelector('.nav-area')

hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('active')
    navArea.classList.toggle('active')
})

navArea.addEventListener('click', () => {
    navArea.classList.remove('active')
    hamBtn.classList.remove('active')
})