$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);
    return false;
});

$('.resizableImage').hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=10%', width: '+=10%'});
}
function returnToOriginalSize() {
    $(this).css({height: "", width: ""});
}