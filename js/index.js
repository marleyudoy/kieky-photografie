const hamburger = document.getElementById("hamburger")
const hambtn = document.getElementById('ham-btn')

hambtn.addEventListener('click',show_ham)
function show_ham(){
  hamburger.classList.toggle("active")
}