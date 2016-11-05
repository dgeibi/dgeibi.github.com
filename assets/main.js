window.addEventListener('load',function(){
    /* external links */
    Array.prototype.forEach.call(document.links, function(link) {
        if (link.hostname != location.hostname) {
            link.target = '_blank';
        }
    });

    /* add table-wrapper */
    Array.prototype.forEach.call(document.querySelectorAll('table'), function(table) {
        var div = document.createElement("div");
        div.className = "table-wrapper";
        var range = document.createRange();
        range.selectNode(table);
        range.surroundContents(div);
    });

    /* back to top */
    (function() {
        var topBtn = document.querySelector('[data-js-backtotop]');
        var backToTop = function() {
            if (window.pageYOffset > 100) {
                topBtn.classList.add('show');
            } else {
                topBtn.classList.remove('show');
            }
        };
        backToTop();
        window.addEventListener('scroll', backToTop);
        topBtn.addEventListener('click', Util.scrollToPos);
    })();

    /* nav-btn */
    document.getElementById('nav-btn').addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle("active");
        document.getElementById('nav').classList.toggle("active");
    });
});
