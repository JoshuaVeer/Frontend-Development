var filterbutton = document.querySelector('#categorie');
var filters = document.querySelector('#filter');
var stijlnav = document.querySelector('.java');

function filterlijst() {
    filters.classList.add(".java");
}

filterbutton.addEventListener('click', filterlijst);