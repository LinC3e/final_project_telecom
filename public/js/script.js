console.log(document.querySelector('title').textContent)


const btn = document.getElementById('btn')
const closebtn = document.getElementById('close')
const nav = document.getElementById('navbar')

btn.addEventListener('click', () => {
    nav.classList.add("active")
})


closebtn.addEventListener('click', () => {
    nav.classList.remove("active")
})
