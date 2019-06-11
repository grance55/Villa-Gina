// promjena css-a prilikom ispunjavanja forme
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


// zaustavljanje skakajuce stijelice na hover
$(document).on({
    mouseenter: function () {
        $('.scrollDown__arrow').removeClass('animated infinite bounce fadeInDown');
    },
    mouseleave: function () {
        $('.scrollDown__arrow').addClass('animated infinite bounce fadeInDown');
    }
}, '.scrollDown'); 


// mijenjanje navbara ukoliko se skrola na dno stranice
$(window).on("scroll",function(e){
    let navbar = document.querySelector('.navbar');
    let links = document.querySelectorAll('.links__elem');
    let logo = document.querySelector('.navbar__logo');
    let menu = document.querySelectorAll('.js-menu__line');

    if($(window).scrollTop() >=  $(document).height() - $('footer').height() - 50)  {
        $(navbar).css({
            'background-color' : 'black',
        })
        $(menu).css({
            'background-color': 'white'
        })
       
        $(logo).attr('src', '/public/images/logo_small_white.png');
    }else{
        $(navbar).css({
            'background-color' : 'white',
        })
        
        $(menu).css({
            'background-color': 'black'
        })

        $(logo).attr('src', '/public/images/VILLA-GINA--LOGO-bijela.png');
    }
});


// inicijaliziranje mape 
function initMap() {
    var options = {
        zoom: 13,
        center: { lat: 44.11972, lng: 15.24222 }
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    var marker = new google.maps.Marker({
        position: { lat: 44.1225, lng: 15.228 },
        map: map
    });
}


// minjenaje bolje linka u navbaru na hover
function changeColorLink(link){
    if($(window).scrollTop() + $(window).height() > $(document).height() - 50)  {
        $(link).hover(
            function(){
                $(link).css({
                    'color': 'white'
                })
            },
            function(){
                $(link).css({
                    'color': 'rgb(109, 107, 107)'
                })
            }   
        )       
    }else{
        $(link).hover(
            function(){
                $(link).css({
                    'color': 'black'
                })
            },
            function(){
                $(link).css({
                    'color': 'rgb(109, 107, 107)'
                })
            }   
        )       
    }
}

// prikazivanje ili skrivanje menija u mobilnom ili tablet modu
function changeMenu(x){
    let elem1 = $(x).children('.js-menu__line--first'),
        elem2 = $(x).children('.js-menu__line--middle'),
        elem3 = $(x).children('.js-menu__line--last'),
        menu = document.querySelector('.js-menuMobile'),
        navbar = document.querySelector('.navbar'),
        logo = document.querySelector('.navbar__logo');


    $(navbar).toggleClass('is-active--navbar');
    $(logo).attr('src', '/public/images/logo_small_white.png');
    $('body').toggleClass('stop-scrolling');

    $(elem1).toggleClass('is-activ--first');
    $(elem2).toggleClass('is-activ--middle');
    $(elem3).toggleClass('is-activ--last'); 
    
    
    $(menu).toggleClass('is-active--menuMobile');
}