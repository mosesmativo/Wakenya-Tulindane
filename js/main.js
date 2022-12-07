
if ($.fn.classyNav) {
    $('#roamingnav').classyNav();
}

// nav scroll   
var myoffset = $('#dtr-header-global').height();
$('.navbar a[href^="#"]').click(function () {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - myoffset
    }, "slow", "easeInSine");
});

//stickyatTop
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 670) {
        $(".scrollheader").addClass("is-sticky");
        $('.scrollheader').css('position', 'fixed');
    } else {
        $(".scrollheader").removeClass("is-sticky");
        $(".scrollheader").css('position', 'relative');
    }
});


$('.to-donate').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 30,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },
        576: {
            items: 2,
            nav: false,
            dots: true,
        },
        768: {
            items: 2,
            nav: false,
            dots: true,
        },
        992: {
            items: 3,
            nav: true,
            dots: true,
        },
        1200: {
            items: 3,
            nav: true,
            dots: true,
        }
    }
});


$('.full-banner').owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 5,
    responsive: {
        0: {
            items: 1,
        }
    }
});


