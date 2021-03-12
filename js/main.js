$(document).ready(function () {

    // team slider js

    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint:768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    // counter js

    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });


    // Smooths scrolling
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });


    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });

    // wow js

    new WOW().init();

    // scroll to top js

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#scroll_to_top").fadeIn();
        } else {
            $("#scroll_to_top").fadeOut();
        }
    });

    $("#scroll_to_top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
    
    // preloader js
    
    $(window).on("load", function(){
        $(".loader_bg").delay(2000).fadeOut(700);
    });
    
    // responsive menu js
    
    $(".overlay_content ul li a").click(function(){
        $(".overlay").hide();
    });
    $(".openNav").click(function(){
        $(".overlay").show(400);
    });
    $(".closeNav").click(function(){
        $(".overlay").hide();
    });
    $(".overlay a img").click(function(){
        $(".overlay").hide();
    });
    
});

// mixit up js

var mixer = mixitup('.cont');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});