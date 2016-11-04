window.addEventListener('DOMContentLoaded', function() {
    var doc = document;
    var win = window;
    /* https://gist.github.com/joshcanhelp/a3a669df80898d4097a1e2c01dea52c1 */
    function scrollToPos(scrollTo, scrollDuration) {
        if (typeof scrollTo === 'string') {
            var scrollToObj = doc.querySelector(scrollTo);
            if (scrollToObj && typeof scrollToObj.getBoundingClientRect === 'function') {
                scrollTo = win.pageYOffset + scrollToObj.getBoundingClientRect().top;
            } else {
                throw 'error: No element found with the selector "' + scrollTo + '"';
            }
        } else if (typeof scrollTo !== 'number') {
            scrollTo = 0;
        }
        if (typeof scrollDuration !== 'number' || scrollDuration < 0) {
            scrollDuration = 1000;
        }
        var cosParameter = (win.pageYOffset - scrollTo) / 2,
            scrollCount = 0,
            oldTimestamp = win.performance.now();

        function step(newTimestamp) {
            var tsDiff = newTimestamp - oldTimestamp;
            scrollCount += Math.PI / (scrollDuration / tsDiff);
            if (scrollCount >= Math.PI) {
                if(scrollTo === 0) {
                    win.scrollTo(0,0);
                }
                return;
            }
            var moveStep = Math.round(scrollTo + cosParameter + cosParameter * Math.cos(scrollCount));
            win.scrollTo(0, moveStep);
            oldTimestamp = newTimestamp;
            win.requestAnimationFrame(step);
        }
        win.requestAnimationFrame(step);
    }

    // from http://stackoverflow.com/a/4425214
    (function() {
        var links = doc.links;
        for (var i = 0, linksLength = links.length; i < linksLength; i++) {
            if (links[i].hostname != win.location.hostname) {
                links[i].target = '_blank';
            }
        }
    })();



    /* add table-wrapper */
    (function() {
        var tables = doc.getElementsByTagName("table");
        for (var i = 0, len = tables.length; i < len; i++) {
            var div = doc.createElement("div");
            div.className = "table-wrapper";
            var range = doc.createRange();
            range.selectNode(tables[i]);
            range.surroundContents(div);
        }
    })();

    (function() {
        var backBtn = doc.querySelector('[data-js-backtotop]');
        var scrollTrigger = 100;
        var backToTop = function() {
            var scrollTop = win.pageYOffset;
            if (scrollTop > scrollTrigger) {
                backBtn.classList.add('show');
            } else {
                backBtn.classList.remove('show');
            }
        };
        backToTop();
        win.addEventListener('scroll', function() {
            backToTop();
        });
        backBtn.addEventListener('click', function() {
            scrollToPos(0, 500);
        });
    })();

    (function() {
        var links = doc.querySelectorAll("[data-js-toc] a");
        var length = links.length;
        for (var i = 0; i < length; i++) {
            links[i].onclick = function(e) {
                if (this.hash != "") {
                    e.preventDefault();
                    var hash = this.hash;
                    scrollToPos(hash, 700);
                    win.location.hash = hash;
                }
            };
        }
    })();

    /* nav-btn */
    (function() {
        "use strict";
        var toggle = doc.getElementById("nav-btn");
        var nav = doc.getElementById("nav");
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            this.classList.toggle("active");
            nav.classList.toggle("active");
        });
    })();
});
