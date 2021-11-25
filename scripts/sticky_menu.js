$(window).scroll(function () {
    if($(window).scrollTop() > 170) {
        $(".topnav").addClass('sticky');
    } else {
        $(".topnav").removeClass('sticky');
    }
});