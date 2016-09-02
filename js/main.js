
$(document).ready(function() {
    (function(){
       var docHeight = $(window).height();
       var footerHeight = $('footer').height();
       var footerTop = $('footer').position().top + footerHeight;

       if (footerTop < docHeight) {
        $('footer').css('margin-top', (docHeight - footerTop - 35) + 'px');
       }
    })();

    // from http://stackoverflow.com/a/4425214
    (function(){
        var links = document.links;
        for (var i = 0, linksLength = links.length; i < linksLength; i++) {
            if (links[i].hostname != window.location.hostname) {
                links[i].target = '_blank';
            }
        }
    })();

    // add table-wrapper
    (function(){
        var tables = document.getElementsByTagName("table");
        for (var i = 0, len = tables.length; i < len; i++) {
            var div = document.createElement("div");
            div.className = "table-wrapper";
            var range = document.createRange();
            range.selectNode(tables[i]);
            range.surroundContents(div);
        }
    })();

    (function(){
        $("a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 400, function() {
                    window.location.hash = hash;
                });
            }
        });
    })();

    (function() {
        if ($('#back-to-top').length) {
            var scrollTrigger = 100, // px
                backToTop = function() {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#back-to-top').addClass('show');
                    } else {
                        $('#back-to-top').removeClass('show');
                    }
                };
            backToTop();
            $(window).on('scroll', function() {
                backToTop();
            });
            $('#back-to-top').on('click', function(e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 400);
            });
        }
    })();

})
