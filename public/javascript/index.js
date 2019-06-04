
function handleChangeLabel(element) {

    $(element).children('.js-formInput').blur(function () {
        if ($(element).children('.js-formInput').val().length !== 0) {
            $(element).children('.js-formLabel').css({ 'color': 'rgb(109, 107, 107)', 'font-size': '15px', 'top': '0px' });
        } else {
            $(element).children('.js-formLabel').css({ 'color': 'white', 'font-size': '18px', 'top': '25px' });
        }
    });

    $(element).children('.js-formInput').focus(function () {
        $(element).children('.js-formLabel').css({ 'color': 'rgb(109, 107, 107)', 'font-size': '15px', 'top': '0px' });
    });
}



$(document).on({
    mouseenter: function () {
        $('.scrollDown__arrow').removeClass('animated infinite bounce fadeInDown');
    },
    mouseleave: function () {
        $('.scrollDown__arrow').addClass('animated infinite bounce fadeInDown');
    }
}, '.scrollDown'); 



$(window).on("load resize scroll",function(e){
    let navbar = document.querySelector('.navbar');
    let links = document.querySelectorAll('.links__elem');
    let logo = document.querySelector('.group__logo');
    
    if($(window).scrollTop() + $(window).height() > $(document).height() - 50)  {
        $(navbar).css({
            'background-color' : 'transparent',
        })
        $(links).css({
            'color': 'rgb(109, 107, 107)'
        })
        $(logo).css({
            'color': 'rgb(109, 107, 107)',
        })
        $(logo).attr('src', '/public/images/logo_small_white.png');
    }else{
        $(navbar).css({
            'background-color' : 'white',
        })
        $(links).css({
            'color': 'rgb(109, 107, 107)'
        })
        $(logo).css({
            'color': 'rgb(109, 107, 107)'
        })
        $(logo).attr('src', '/public/images/VILLA-GINA--LOGO-bijela.png');
    }});



