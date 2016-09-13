(function($) {
    $.fn.animateWithScroll = function(inputAnimate) {
        $(this).addClass("animated").waypoint(function() {
            $(this).addClass(inputAnimate).css("visibility", 'visible');
        }, {
            offset: "70%"
        }), {
            offset: -$(window).height()
        };
    };
})(jQuery);


$(document).ready(function(){

    $('.news__wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: false,
        nextArrow: false
    });

    //show overlay on hover shop item
    $('.shop__small-section, .shop__large-horizontal, .shop__large-vertical').hover(function(){
        $('img', this).addClass('image-hover');
        $('.shop__overlay-info', this).removeClass('fadeOutUp').addClass('fadeInDownBig');
    },
        function(){
            $('img', this).removeClass('image-hover');
            $('.shop__overlay-info', this).removeClass('fadeInDownBig').addClass('fadeOutUp');
        }
    );

    $('.menu a, .mobile-menu a').click(function(){
        $(this).mPageScroll2id({offset: 74});
    });

    //scroll animation
    $('.about-us').animateWithScroll('zoomIn');
    $('.work__large-section--first').animateWithScroll('fadeInLeft');
    $('.work__small-section--first').animateWithScroll('fadeInRight');
    $('.work__xsmall-section--first').animateWithScroll('fadeInUp');

    $('.work__large-section--second').animateWithScroll('fadeInRight');
    $('.work__small-section--second').animateWithScroll('fadeInLeft');
    $('.work__xsmall-section--second').animateWithScroll('fadeInUp');

    $('.work__large-section--third').animateWithScroll('fadeInLeft');
    $('.work__small-section--third').animateWithScroll('fadeInUp');
    $('.work__xsmall-section--third').animateWithScroll('fadeInUp');
    $('.work__large-section--fourth').animateWithScroll('fadeInRight');

    $('.news').animateWithScroll('fadeInUp');

    $('#shop__small-section--1').animateWithScroll('fadeInLeft');
    $('#shop__small-section--2').animateWithScroll('fadeInDown');
    $('#shop__large-horizontal--1').animateWithScroll('fadeInUp');
    $('#shop__large-vertical--1').animateWithScroll('fadeInDown');
    $('#shop__large-vertical--2').animateWithScroll('fadeInUp');
    $('#shop__large-horizontal--2').animateWithScroll('fadeInDown');
    $('#shop__small-section--3').animateWithScroll('fadeInUp');
    $('#shop__small-section--4').animateWithScroll('fadeInRight');
    $('.shop__panel').animateWithScroll('zoomIn');

    $('.contact-animate').animateWithScroll('fadeInDown');


    var clicked = 0;
    //hamburger handler
    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('.mobile-menu__panel').toggleClass('mobile-menu__panel--menu-active');
        if (clicked == 0) {
            $('.mobile-menu__panel').removeClass('mobile-menu__panel--menu-hidden');
            $('.mobile-menu').removeClass('animated-menu fadeOutRight').addClass('mobile-menu--is-active animated-menu fadeInRight');
            clicked = 1;
        } else if (clicked == 1){
            $('.mobile-menu').removeClass('animated-menu fadeInRight').addClass('animated-menu fadeOutRight');
            $('.mobile-menu__panel').addClass('mobile-menu__panel--menu-hidden');
            clicked = 0;
        }

    });
    $('.mobile-menu a').click(function(){
        $('.hamburger').toggleClass('is-active');
        $('.mobile-menu__panel').toggleClass('mobile-menu__panel--menu-active');
        $('.mobile-menu').removeClass('animated-menu fadeInRight').addClass('animated-menu fadeOutRight');
        clicked = 0;
    });

    $(window).resize(function(){
        if($(this).width() > 1024){
            $('.mobile-menu').removeClass('mobile-menu--is-active animated-menu fadeOutRight fadeInRight');
            $('.hamburger').removeClass('is-active');
            $('.mobile-menu__panel').removeClass('mobile-menu__panel--menu-active');
            clicked = 0;
        }
    });

});