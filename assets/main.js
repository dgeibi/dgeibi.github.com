/* external links */
$('a').each(function() {
    if (this.hostname != location.hostname) {
        this.target = '_blank';
    }
});

/* add table-wrapper */
$('table').each(function() {
    var div = document.createElement("div");
    div.className = "table-wrapper";
    var range = document.createRange();
    range.selectNode(this);
    range.surroundContents(div);
    div = null;
    range = null;
});

/* back to top */
var backToTop = function() {
    if ($(window).scrollTop() > 100) {
        $('[data-js-backtotop]').addClass('show');
    } else {
        $('[data-js-backtotop]').removeClass('show');
    }
};
backToTop();
$(window).on('scroll', backToTop);
$('[data-js-backtotop]').on('click', $.scrollToPos);

/* toc */
try {
    $.createDirectory('.toc-src', '[data-js-toc]', true);
    $("[data-js-toc] a").on('click', function(e) {
        if (this.hash != "") {
            e.preventDefault();
            $.scrollToPos(this.hash, 700);
            window.location.hash = this.hash;
        }
    });
} catch (e) {}

/* nav-btn */
$('#nav-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $('#nav').toggleClass("active");
});
