"use-strict";

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 900);
    return false;
});

$('.makeImageBigger').hover(bigger, backToOriginal);

function bigger() {
    $(this).css({height: '+=10%', width: '+=10%'});
}
function backToOriginal() {
    $(this).css({height: "", width: ""});
}