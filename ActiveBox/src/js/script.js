$(function() {

    //fixed header//

    let header = $('#header');
    let main = $('#main');
    let mainHeight = main.innerHeight();;
    let scrollPos = $(window).scrollTop();
    let nav = $('#nav');
    let navToggle = $('#navToggle');

    checkScroll(scrollPos,  mainHeight);

    $(window).on('scroll resize', function() {
        mainHeight = main.innerHeight() - 20;
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos,  mainHeight);
    });

    function checkScroll() {
        if(scrollPos >= mainHeight){
            header.addClass('fixed');
        }else{
            header.removeClass('fixed');
        }
    }

    //smooth scroll

    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass('active');


        $('html, body').animate({
            scrollTop: elementOffset - 55
        }, 700);

    });

    //navToggle//

    

    navToggle.on('click', function(event) {
        event.preventDefault();

        nav.toggleClass('active');
        navToggle.toggleClass('active');
    });


    

    
    //testimonialSlider//

    let slider = $('#testimonialsSlider');
    
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});



