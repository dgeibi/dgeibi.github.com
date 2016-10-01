$(document).ready(function() {

    // from http://stackoverflow.com/a/4425214
    (function() {
        var links = document.links;
        for (var i = 0, linksLength = links.length; i < linksLength; i++) {
            if (links[i].hostname != window.location.hostname) {
                links[i].target = '_blank';
            }
        }
    })();

    // add table-wrapper
    (function() {
        var tables = document.getElementsByTagName("table");
        for (var i = 0, len = tables.length; i < len; i++) {
            var div = document.createElement("div");
            div.className = "table-wrapper";
            var range = document.createRange();
            range.selectNode(tables[i]);
            range.surroundContents(div);
        }
    })();

    (function() {
        $("#toc a").on('click', function(event) {
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
            var topPos = 0;
            var scrollTrigger = topPos + 100; // px
            var backToTop = function() {
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
                $('html,body').animate({
                    scrollTop: topPos
                }, 400);
            });
        }
    })();

    (function() {

        "use strict";

        var toggles = document.querySelectorAll(".cmn-toggle-switch");

        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        };

        function toggleHandler(toggle) {
            toggle.addEventListener("click", function(e) {
                e.preventDefault();
                (this.classList.contains("active") === true) ? this.classList.remove("active"): this.classList.add("active");
            });
        }

    })();
})
