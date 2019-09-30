// = jquery/jquery.min.js
// = bootstrap/bootstrap.min.js
// = wow/wow.min.js


jQuery(document).ready(function(){

    $('#search-scheme__input').focus(function(){
        $(this).parent().addClass('active');
    });
    $('#search-scheme__input').focusout(function(){
        $(this).parent().removeClass('active');
    });

    jQuery('.search-scheme__choice').click(function () {
        jQuery('.search-scheme__dropdown').toggleClass('active');
    });





    //mobil

    $('.mobil-burger').click(function () {
        $('.mobil-menu').toggleClass('active');
    });

    $('.mobil-menu__container-language').click(function () {
        $('.function-window_language').toggleClass('active');
    });

    $('.mobil-menu__container-currency').click(function () {
        $('.function-window_currency').toggleClass('active');
    });

    $('.mobil-menu__container-identification').click(function () {
        $('.function-window_identification').toggleClass('active');
    });

    $('.mobil-menu__container-viewed').click(function () {
        $('.function-window_viewed').toggleClass('active');
    });

    $('.section_hotel__info').click(function () {
        $('.function-window_guests').toggleClass('active');
    });

    $('.function-window__return').click(function () {
        $(this).parent().removeClass('active');
    });

    $('.section_hotel__search').focus(function(){
        $('.function-window_direction').addClass('active');
    });

    // $('.section_hotel__search').focusout(function(){
    //     $('.function-window_direction').removeClass('active');
    // });

});

jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
        let div1 = $(".search-scheme__choice");
        let div2 = $(".search-scheme__dropdown");// тут указываем ID элемента
        if (!div1.is(e.target) // если клик был не по нашему блоку
            && div1.has(e.target).length === 0
            && !div2.is(e.target)
            && div2.has(e.target).length === 0) { // и не по его дочерним элементам

            $('.search-scheme__dropdown').removeClass('active');
        }
    });
});

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}