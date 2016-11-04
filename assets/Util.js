var Util = {};
// copy from http://blog.lxjwlt.com/front-end/2014/07/06/js-create-directory.html
Util.createTOC = function(src, target, isDirNum) {

    var contentArray = [],
        titleId = [],
        levelArray, root, level,
        currentList, list, li, link, i, len;
    target=document.querySelector(target);
    // 获取标题编号 标题内容
    levelArray = (function(src, contentArray, titleId) {
        var titleElem = document.querySelectorAll(src + '>h2,' + src + '>h3');
        var levelArray = [],
            lastNum =  +titleElem[0].tagName.match(/\d/)[0],
            lastRevNum = 1,
            count = 0,
            lastRevNum, num, rootNum = lastNum;

        Array.prototype.forEach.call(titleElem,function(element){
            // 保存标题内容
            contentArray.push(element.innerText);

            // 修正
            num = +element.tagName.match(/\d/)[0] - rootNum + 1;

            if (num > lastNum) {
                levelArray.push(1);
                lastRevNum += 1;
            } else if (num === lastRevNum ||
                num > lastRevNum && num <= lastNum) {
                levelArray.push(0);
                lastRevNum = lastRevNum;
            } else if (num < lastRevNum) {
                levelArray.push(num - lastRevNum);
                lastRevNum = num;
            }

            count += levelArray[levelArray.length - 1];
            lastNum = num;

            // 添加标识符
            element.id = element.id || element.innerText.replace(/[\s&\/\\#,.+=$~%'":*?<>{}\]\[()@`]/g, "").toLowerCase();
            titleId.push(element.id);
        });


        // 避免一开始就进入下一层
        if (count !== 0 && levelArray[0] === 1) levelArray[0] = 0;

        return levelArray;
    })(src, contentArray, titleId);

    // 构造目录
    currentList = root = document.createElement('ul');
    var dirNum = [0];
    for (i = 0, len = levelArray.length; i < len; i++) {
        level = levelArray[i];
        if (level === 1) {
            list = document.createElement('ul');
            if (!currentList.lastElementChild) {
                currentList.appendChild(document.createElement('li'));
            }
            currentList.lastElementChild.appendChild(list);
            currentList = list;
            dirNum.push(0);
        } else if (level < 0) {
            level *= 2;
            while (level++) {
                if (level % 2) dirNum.pop();
                currentList = currentList.parentNode;
            }
        }
        dirNum[dirNum.length - 1]++;
        li = document.createElement('li');
        link = document.createElement('a');
        link.href = '#' + titleId[i];
        link.className = "plain-link";
        link.innerText = !isDirNum ? contentArray[i] :
            dirNum.join('.') + '. ' + contentArray[i];
        li.appendChild(link);
        currentList.appendChild(li);
    }

    if (len) {
        target.innerHTML = "<h2>目录</h2>";
        target.appendChild(root);
    }
};
Util.scrollToPos = function(scrollTo, scrollDuration) {
    if (typeof scrollTo === 'string') {
        var target = document.querySelector(scrollTo);
        if (target) {
            scrollTo = window.pageYOffset + target.getBoundingClientRect().top;
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
