function Menubar() {
    var x = document.getElementById("myMenu");
    if (x.classList.contains("scrolled")) {
        x.classList.toggle("responsive");
    } else {
        x.classList.toggle("responsive");
    }
}


document.addEventListener("DOMContentLoaded", function () {    
    let scrollTimeout;
    let prevScrollPos = window.scrollY;

    const menu = document.getElementById("myMenu");
    window.addEventListener("scroll", function () {
        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(function () {
            const currentScrollPos = window.scrollY;

            if (currentScrollPos > prevScrollPos) {
                menu.style.transform = "translateY(-100%)";
            } else {
                menu.style.transform = "translateY(0)";
            }

            if (currentScrollPos > 0) {
                menu.classList.add("scrolled");
            } else {
                menu.classList.remove("scrolled");
            }

            prevScrollPos = currentScrollPos;
        }, 15);
    });

    let mybutton = document.getElementById("myBtn");
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    mybutton.addEventListener("click", topFunction);

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $("html, body").animate(
                {
                    scrollTop: target.offset().top,
                },
                500
            );
            Menubar(); // Toggle menu
        }
    });
});

