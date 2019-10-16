
window.onload=function(){
const menuButton = document.querySelector('#menu-button')
const closeButton = document.querySelector('#close-button')
const menu = document.querySelector('#menu')


menuButton.addEventListener('click', function() {
    menu.className = 'menu-open'
 

})

closeButton.addEventListener('click', function() {
    menu.className = 'menu-close'
})
}