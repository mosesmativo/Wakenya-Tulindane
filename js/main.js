(function($) {
    "use strict";

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

$(document).ready(function() {
      $('.infiniteslider').owlCarousel({
        stagePadding:200,
        center: true,
        items:2,
        autoplay:true,
        loop:true,
        margin:20,
        smartSpeed:800,
        autoplayHoverPause:true,
        nav:false,
        dots:false,
        navText: ['<i class="icofont-arrow-left"></i>', 
                  '<i class="icofont-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1,
                stagePadding:0,
            },
            576: {
                items:2,
                stagePadding:0,
            },
            768: {
                items:2,
            },
            992: {
                items:3,
            },
            1200: {
                items: 3,
            }
        }
      })
});

})(window.jQuery);

