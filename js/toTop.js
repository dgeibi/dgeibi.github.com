function backTop(targetId) {
    var btn = document.getElementById(targetId);
    var d = document.documentElement;
    var b = document.body;
    btn.onclick = function() {
        this.timer = setInterval(function() {
            d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
            b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
            if ((d.scrollTop + b.scrollTop) == 0)
                clearInterval(btn.timer);
        }, 10);
    };
}

backTop('toTop');
