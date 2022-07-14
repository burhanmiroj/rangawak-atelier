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

// window.addEventListener('scroll', function() {
//     const scrollPosition = this.pageYOffset

//     if(scrollPosition > navbar.clientHeight * 2) {
//         const navbarChildrenWrapper = navbar.querySelector('div')
        
//         mobileMenu.classList.add('pt-5')
//         navbar.classList.add('bg-black')
//         navbarChildrenWrapper.classList.replace('h-20', 'h-16')

//         // 
//         mobileMenuBtn.classList.add('text-white')
        
//         // DARK CONTENT NAVBAR
//         if (navbar.classList.contains('dark-content')) {        
//             headerLogo.setAttribute('src', '/asset/logo.png')
//             mobileMenuBtn.classList.replace('text-black', 'text-slate-100')

//             searchProduct.forEach(search => {
//                 search.classList.replace('border-black', 'border-white')
//                 search.classList.replace('placeholder-black', 'placeholder-white')
//                 search.classList.replace('text-black', 'text-white')
//             })
//         }
//     } else {
//         const navbarChildrenWrapper = navbar.querySelector('div')
        
//         mobileMenu.classList.remove('pt-5')
//         navbar.classList.remove('bg-black')
//         navbarChildrenWrapper.classList.replace('h-16', 'h-20')

//         // DARK CONTENT NAVBAR
//         if (navbar.classList.contains('dark-content')) {        

//             mobileMenuBtn.classList.remove('text-white')

//             headerLogo.setAttribute('src', '/asset/logo-black.png')
//             mobileMenuBtn.classList.replace('text-slate-100', 'text-black')

//             searchProduct.forEach(search => {
//                 search.classList.replace('border-white', 'border-black')
//                 search.classList.replace('placeholder-white', 'placeholder-black')
//                 search.classList.replace('text-white', 'text-black')
//             })
//         }
//     }
    
//     if(scrollPosition > 500) {
//         mobileMenuLink.forEach(link => {
//             link.classList.add('text-black')
//         })
//         if(navbar.classList.contains(!('black-content'))) {
//             searchProduct.forEach(search => {
//                 search.classList.replace('border-white', 'border-black')
//                 search.classList.replace('placeholder-white', 'placeholder-black')
//                 search.classList.replace('text-white', 'text-black')
//                 search.classList.add('lg:border-white')
//                 search.classList.add('lg:placeholder-white')
//                 search.classList.add('lg:text-white')
//             })
//         }
//     } else {
//         mobileMenuLink.forEach(link => {
//             link.classList.remove('text-black')
//         })
//         if(navbar.classList.contains(!('black-content'))) {
//             searchProduct.forEach(search => {
//                 search.classList.replace('border-black', 'border-white')
//                 search.classList.replace('placeholder-black', 'placeholder-white')
//                 search.classList.replace('text-black', 'text-white')
//             })
//         }
//     }
// })