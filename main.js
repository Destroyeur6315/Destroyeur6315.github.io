$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
            console.log("romain");
        } else {
            $(".navbar").removeClass("sticky");
            console.log("romain");
        }

        //  scroll-up button show/hide script  //
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    //  slide-up script  //

    $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 });
        //  removing smooth scroll on slide-up button click  //
        $("html").css("scrollBehavior", "auto");
    });

    $(".navbar .menu li a").click(function () {
        //  Smooth scroll on Menu Items click  //

        $("html").css("scrollBehavior", "smooth");
    });

    //  Toggle Navbar  //

    $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    //  Typing Text Animation  //

    var typed = new Typed(".typing", {
        strings: [
            "Fullstack Developer",
            "Software Developer",
            "Python Developer",
            "Founder",
            "Author"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [
            "Fullstack Developer",
            "Software Developer",
            "Python Developer",
            "Founder",
            "Author"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //  Owl Carousel  //

    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach((slide, index) => {
        if (index === slideIndex - 1) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}
