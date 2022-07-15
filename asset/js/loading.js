document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loading-screen").style.visibility = "visible";
    } else {
        document.querySelector("#loading-screen").style.opacity = 0;
        document.querySelector("#loading-screen-img").style.opacity = 0;
        setTimeout(() => {
            document.querySelector("#loading-screen").style.display = "none";
        }, 100);
        document.querySelector("body").style.visibility = "visible";
    }
};