// from http://stackoverflow.com/a/4425214
$(document).ready(function() {
    var links = document.links;
    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
        if (links[i].hostname != window.location.hostname) {
            links[i].target = '_blank';
        }
    }

    // add table-wrapper
    var tables = document.getElementsByTagName("table");
    for (var i = 0, len = tables.length; i < len; i++) {
        var div = document.createElement("div");
        div.className = "table-wrapper";
        var range = document.createRange();
        range.selectNode(tables[i]);
        range.surroundContents(div);
    }

    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 500, function() {
                window.location.hash = hash;
            });
        }
    });

    $("#toTop").on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
})
