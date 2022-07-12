const mobileMenuBtn = document.querySelector('#menu-btn')
const mobileMenu = document.querySelector('#menu-dropdown')
const navbar = document.querySelector('nav')
const mobileMenuLink = document.querySelectorAll('#menu-dropdown li a')
const searchProduct = document.querySelectorAll('#search_product')

mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('-translate-y-full')
})

window.addEventListener('scroll', function() {
    const scrollPosition = this.pageYOffset
    const headerLogo = navbar.querySelector('img')

    if(scrollPosition > navbar.clientHeight * 2) {
        const navbarChildrenWrapper = navbar.querySelector('div')
        
        mobileMenu.classList.add('pt-5')
        navbar.classList.add('bg-black')
        navbarChildrenWrapper.classList.replace('h-20', 'h-16')

        // DARK CONTENT NAVBAR
        if (navbar.classList.contains('dark-content')) {        
            headerLogo.setAttribute('src', '/asset/logo.png')
            mobileMenuBtn.classList.replace('text-slate-900', 'text-slate-100')
        }
    } else {
        const navbarChildrenWrapper = navbar.querySelector('div')
        
        mobileMenu.classList.remove('pt-5')
        navbar.classList.remove('bg-black')
        navbarChildrenWrapper.classList.replace('h-16', 'h-20')

        // DARK CONTENT NAVBAR
        if (navbar.classList.contains('dark-content')) {        
            headerLogo.setAttribute('src', '/asset/logo-black.png')
            mobileMenuBtn.classList.replace('text-slate-100', 'text-slate-900')
        }
    }
    
    if(scrollPosition > 500) {
        mobileMenuLink.forEach(link => {
            link.classList.add('text-black')
        })
        searchProduct.forEach(search => {
            search.classList.replace('border-white', 'border-slate-900')
            search.classList.replace('placeholder-white', 'placeholder-slate-900')
            search.classList.replace('text-white', 'text-slate-900')
            search.classList.add('lg:border-white')
            search.classList.add('lg:placeholder-white')
            search.classList.add('lg:text-white')
        })
    } else {
        mobileMenuLink.forEach(link => {
            link.classList.remove('text-black')
        })
        searchProduct.forEach(search => {
            search.classList.replace('border-slate-900', 'border-white')
            search.classList.replace('placeholder-slate-900', 'placeholder-white')
            search.classList.replace('text-slate-900', 'text-white')
        })
    }
})