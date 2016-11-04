// copy from http://blog.lxjwlt.com/front-end/2014/07/06/js-create-directory.html
$script.ready('zepto', function() {
    $.createDirectory = function(article, directory, isDirNum) {
        var contentArray = [],
            titleId = [],
            levelArray, root, level,
            currentList, list, li, link, i, len;

        // 获取标题编号 标题内容
        levelArray = (function(article, contentArray, titleId) {
            var titleElem = $(article + '>h2,' + article + '>h3'),
                levelArray = [],
                lastNum = +titleElem[0].tagName.match(/\d/)[0],
                lastRevNum = 1,
                count = 0,
                lastRevNum, num, rootNum = lastNum;

            $(article + '>h2,' + article + '>h3').each(function() {

                // 保存标题内容
                contentArray.push($(this).text());

                // 修正
                num = +this.tagName.match(/\d/)[0] - rootNum + 1;

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
                this.id = this.id || $(this).text().replace(/[\s&\/\\#,.+=$~%'":*?<>{}\]\[()@`]/g, "").toLowerCase();
                titleId.push(this.id);
            });


            // 避免一开始就进入下一层
            if (count !== 0 && levelArray[0] === 1) levelArray[0] = 0;

            return levelArray;
        })(article, contentArray, titleId);

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
            $(directory).html("<h2>目录</h2>");
            $(directory).append(root);
        }
    };
    $script.done('toc');
});
