const backToTopBTN = document.createElement("div");
backToTopBTN.innerHTML = `<button class="w-16 h-16 animate-bounce transition-all duration-500 flex justify-center items-center opacity-0 fixed bottom-5 left-1/2 -ml-7 transform -translate-x-1/2 z-20">
    <span class="iconify text-2xl" data-icon="bi:chevron-up"></span>
</button>`;
backToTopBTN.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

window.addEventListener('scroll', function() {
    const windowPosition = this.pageYOffset
    const btnToTop = backToTopBTN.querySelector('button')

    if(windowPosition > 200) {
        btnToTop.classList.replace('opacity-0', 'opacity-1')
    } else {
        btnToTop.classList.replace('opacity-1', 'opacity-0')
    } 
})

document.body.append(backToTopBTN);
