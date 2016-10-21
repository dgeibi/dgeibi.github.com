window.addEventListener('DOMContentLoaded', function() {
    // from http://stackoverflow.com/a/4425214
    (function() {
        var links = document.links;
        for (var i = 0, linksLength = links.length; i < linksLength; i++) {
            if (links[i].hostname != window.location.hostname) {
                links[i].target = '_blank';
            }
        }
    })();

    /* add table-wrapper */
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
        var backBtn = document.getElementById("back-to-top");
        var scrollTrigger = 100;
        var backToTop = function() {
            var scrollTop = window.pageYOffset;
            if (scrollTop > scrollTrigger) {
                backBtn.classList.add('show');
            } else {
                backBtn.classList.remove('show');
            }
        };
        backToTop();
        window.addEventListener('scroll', function() {
            backToTop();
        });
        backBtn.addEventListener('click', function() {
            window.scrollTo(0, 0);
        });
    })();

    /* nav-btn */
    (function() {
        "use strict";
        var toggle = document.getElementById("nav-btn");
        var nav = document.getElementById("nav");
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            this.classList.toggle("active");
            nav.classList.toggle("active");
        });
    })();
});
