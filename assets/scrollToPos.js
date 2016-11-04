$script.ready('zepto', function() {
    $.scrollToPos = function(scrollTo, scrollDuration) {
        if (typeof scrollTo === 'string') {
            if ($(scrollTo)) {
                scrollTo = window.pageYOffset + $(scrollTo).offset().top;
            } else {
                throw 'error: No element found with the selector "' + scrollTo + '"';
            }
        } else if (typeof scrollTo !== 'number') {
            scrollTo = 0;
        }
        if (typeof scrollDuration !== 'number' || scrollDuration < 0) {
            scrollDuration = 500;
        }
        var cosParameter = (window.pageYOffset - scrollTo) / 2,
            scrollCount = 0,
            oldTimestamp = window.performance.now();

        function step(newTimestamp) {
            var tsDiff = newTimestamp - oldTimestamp;
            scrollCount += Math.PI / (scrollDuration / tsDiff);
            if (scrollCount >= Math.PI) {
                if (scrollTo === 0) {
                    window.scrollTo(0, 0);
                }
                return;
            }
            var moveStep = Math.round(scrollTo + cosParameter + cosParameter * Math.cos(scrollCount));
            window.scrollTo(0, moveStep);
            oldTimestamp = newTimestamp;
            window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    };
    $script.done('scrollToPos');
});
