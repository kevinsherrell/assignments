var hamburgerMenu = document.getElementById("hamburger")
var hiddenMenu = document.getElementById("hiddenNav")
var menuUnhidden = false
var hero = document.getElementById('hero')
var nav = document.getElementById('top-nav')
function toggleClass(a,b){
    return a.classList.toggle(b)
}
 
// hamburgerMenu.addEventListener('click', function(){
//     hiddenNav.classList.toggle('hidden-nav');
//     hero.classList.toggle('hidden');
//     nav.classList.toggle('full-height')
// })
