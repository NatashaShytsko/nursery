$(document).ready(function () {
    $('span.navbar-toggle').click(function (e) {
        $(this).toggleClass('active');
        $('nav').toggle();
        e.stopPropagation();
    });
    $('body').click(function () {
        var link = $('span.navbar-toggle');
        if (link.hasClass('active')) {
            link.click();
        }
    });
    $('#icon').click(function(){
        $(this).toggleClass('open');
    });

});

