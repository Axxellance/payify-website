//============================================================
// 
//============================================================
const navBar = document.querySelector('header .navBar');
const scrollToTop = document.querySelector('.scrollToTop');

//============================================================
// 
//============================================================
let scrollPos = window.scrollY;
if (scrollPos > 100) {
    scrollToTop.classList.add('show');
} else {
    scrollToTop.classList.remove('show');
}
if (scrollPos > 1) {
    navBar.classList.add('changeColor');
} else {
    navBar.classList.remove('changeColor');
}
window.addEventListener("scroll", e => {
    let scrollPos = window.scrollY;
    if (scrollPos > 100) {
        scrollToTop.classList.add('show');
    } else {
        scrollToTop.classList.remove('show');
    }
    if (scrollPos > 1) {
        navBar.classList.add('changeColor');
    } else {
        navBar.classList.remove('changeColor');
    }
});

scrollToTop.onclick = function () {
    window.scroll({top: 0});
}