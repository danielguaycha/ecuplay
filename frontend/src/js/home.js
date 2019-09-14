$(document).ready(function(){

    // menu

    $('#btnMenu, .ec-nav-overlay').click(function(){
        $('.ec-menu').toggleClass('open');
        $('.ec-nav-overlay').toggleClass('open');
    });


    $('[data-fancybox="gallery"]').fancybox({
        // Options will go here
        touch: true,
        loop: true
    });
});