
document.addEventListener("DOMContentLoaded", function () {

    let links = document.querySelectorAll("a[href^='#']")

    links.forEach(link => {
        link.addEventListener("click", function (e) {

            // Prevents default behavior (code below will not execute without this)
            e.preventDefault();

            document.querySelector(this.hash).scrollIntoView({
                behavior: "smooth"
            })

        })
    })

})