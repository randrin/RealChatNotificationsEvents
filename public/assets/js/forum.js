// Go to Top Page & Scroll Navbar Effet
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 260) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
});
