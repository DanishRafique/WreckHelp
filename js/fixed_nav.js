$(document).ready(function () {
    $(window).on('scroll', function(){
        var scroll_top = $(window).scrollTop();
        if(scroll_top > 50){
            $('#mainHead').addClass("glass");
        }
        else{
            $('#mainHead').removeClass("glass");
        }

    });
});