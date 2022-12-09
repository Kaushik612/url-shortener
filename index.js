const hamburgerBtn = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');


function toggleMenu(){
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    hamburgerBtn.classList.toggle('toggle-btn');
}

mobileMenu.addEventListener('click', function(){
    toggleMenu();
});

hamburgerBtn.addEventListener('click', function(){
    toggleMenu();
});