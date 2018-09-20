$(document).ready(function () {
    var $nav = $("nav");
    $nav.addClass(isMobile() ? "invisible" : "visible");
    $('span.navbar-toggle').click(function (e) {
        $(this).toggleClass('active');
        if ($nav.hasClass("visible")) {
            hideMenu($nav);
        } else {
            showMenu($nav);
        }
        e.stopPropagation();
    });
    $('body').click(function () {
        var link = $('span.navbar-toggle');
        if (link.hasClass('active')) {
            link.click();
        }
    });

    $('#icon').click(function () {
        $(this).toggleClass('open');
    });

});
$(window).resize(function () {
    var $nav = $("nav");
    if (isMobile()) {
        hideMenu($nav);
    } else {
        showMenu($nav);
    }
});

function showMenu($menu) {
    $menu.addClass("visible");
    $menu.removeClass("invisible");
}

function hideMenu($menu) {
    $menu.addClass("invisible");
    $menu.removeClass("visible");
    $("#icon").removeClass("open");
}

function isMobile() {
    return $(window).width() <= 768;
}
