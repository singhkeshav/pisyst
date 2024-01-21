$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("header").addClass("headerBg");
    }
    else{
        $("header").removeClass("headerBg");
    }
});


   