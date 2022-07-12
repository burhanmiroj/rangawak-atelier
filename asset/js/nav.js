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
        
        mobileMenu.classList.add('lg:pt-5')
        navbar.classList.add('bg-slate-900')
        navbarChildrenWrapper.classList.replace('h-20', 'h-16')

        // DARK CONTENT NAVBAR
        if (navbar.classList.contains('dark-content')) {        
            headerLogo.setAttribute('src', '/asset/logo.png')
            mobileMenuBtn.classList.replace('text-slate-900', 'text-slate-100')

            searchProduct.forEach(search => {
                search.classList.replace('border-slate-900', 'border-slate-300')
                search.classList.replace('placeholder-slate-900', 'placeholder-slate-300')
                search.classList.replace('text-slate-900', 'text-slate-300')
            })
        }
    } else {
        const navbarChildrenWrapper = navbar.querySelector('div')
        
        mobileMenu.classList.remove('lg:pt-5')
        navbar.classList.remove('bg-slate-900')
        navbarChildrenWrapper.classList.replace('h-16', 'h-20')

        // DARK CONTENT NAVBAR
        if (navbar.classList.contains('dark-content')) {        
            headerLogo.setAttribute('src', '/asset/logo-black.png')
            mobileMenuBtn.classList.replace('text-slate-100', 'text-slate-900')
            
            searchProduct.forEach(search => {
                search.classList.replace('border-slate-300', 'border-slate-900')
                search.classList.replace('placeholder-slate-300', 'placeholder-slate-900')
                search.classList.replace('text-slate-300', 'text-slate-900')
            })
        }
    }

    if(scrollPosition > 500) {
        mobileMenuLink.forEach(link => {
            link.classList.add('text-slate-600')
        })
    } else {
        mobileMenuLink.forEach(link => {
            link.classList.remove('text-slate-600')
        })
    }
})