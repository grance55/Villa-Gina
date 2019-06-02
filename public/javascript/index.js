/*
$(window).resize(function () {
    myfunction();
 });


 $(window).scroll(function () {
    myfunction();
});


$(window).on("load resize scroll",function(e){
    myfunction();
});




function myfunction(){
    let wScroll = $(this).scrollTop();
    let navbar = document.querySelector('.navbar');
    var sticky = $(navbar).position().top;
    

    if(wScroll > 200){
        $('.group__logo').css({
            'margin-left': '80%'
        });
        $('.navbar__links').css({
            'right': '100%'
        });
    }else if(wScroll < 200){
        $('.group__logo').css({
            'left': '0'
        });
        $('.navbar__links').css({
            'right': '0'
        });
    }
}

*/

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
    
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100)  {
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



