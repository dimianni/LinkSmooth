
document.addEventListener("DOMContentLoaded", function () {


    function scrollTo(id) {

        let element = document.getElementById(id);

        let headerHeight = document.getElementById("header").offsetHeight;

        let elementOffset = element.offsetTop;

        let toScroll = elementOffset - headerHeight;

        window.scrollTo({
            top: toScroll,
            behavior: "smooth"
        })

    }

    let links = document.querySelectorAll("a[href^='#']")

    links.forEach(link => {
        link.addEventListener("click", function (e) {

            // Prevents default behavior (code below will not execute without this)
            e.preventDefault();

            let id = this.hash.replace("#", "")

            // document.querySelector(this.hash).scrollIntoView({
            //     behavior: "smooth"
            // })

            scrollTo(id);

        })
    })

})