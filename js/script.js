$(function() {


     /* Fixed Header */

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };


    /* Smooth scroll */

    $("[data-scroll]").on("click", function(Event) {
        Event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        
        $('.burger').removeClass('active');
        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset -69
        }, 700);
    });


        /* Nav Toggle */

    navToggle.on("click", function(event) {
        $('.burger').toggleClass('active');
        event.preventDefault();

        nav.toggleClass("show");
    });

    
         /* Sliders */
    
    $('.intro__slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500
    });

    $('.testimonials__slider').slick({ // это изначально slick слайдер для основного блока изображений
        slidesToShow: 1,  // по одному слайдеру
        slidesToScroll: 1, // по одному менять
        arrows: false, // включение стрелок (если не нужны false)
        asNavFor: '.testimonials__nav__slider', // указываем что навигация для слайдера будет отдельно (указываем класс куда вешаем навигацию)
        initialSlide: 2
    });

    $('.testimonials__nav__slider').slick({ // настройка навигации
        slidesToShow: 3, // указываем что нужно показывать 3 навигационных изображения
        asNavFor: '.testimonials__slider', // указываем что это навигация для блока выше
       // focusOnSelect: true, // указываем что бы слайделось по клику
        initialSlide: 2,
        centerMode: true,
        arrows: true,
        //variableWidth: true,
        infinite: true,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500
    });

});
