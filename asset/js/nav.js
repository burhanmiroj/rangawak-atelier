const mobileMenuBtn = document.querySelector('#menu-btn')
const mobileMenu = document.querySelector('#menu-dropdown')
const navbar = document.querySelector('nav')
const mobileMenuLink = document.querySelectorAll('#menu-dropdown li a')
const searchProduct = document.querySelectorAll('#search_product')
const headerLogo = navbar.querySelector('img')

mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('-translate-y-full')
})

// DARK CONTENT NAVBAR
if (navbar.classList.contains('dark-content')) {        
    headerLogo.setAttribute('src', '/asset/logo-black.png')

    searchProduct.forEach(search => {
        search.classList.replace('border-white', 'border-black')
        search.classList.replace('placeholder-white', 'placeholder-black')
        search.classList.replace('hover:placeholder-slate-100', 'hover:placeholder-slate-500')
        search.classList.replace('text-white', 'text-black')
    })
}