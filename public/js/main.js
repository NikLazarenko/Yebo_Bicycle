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
        $('.shop__overlay-info', this).removeClass('fadeOutUp').addClass('fadeInDown');
    },
        function(){
            $('img', this).removeClass('image-hover');
            $('.shop__overlay-info', this).removeClass('fadeInDown').addClass('fadeOutUp');
        }
    );
});