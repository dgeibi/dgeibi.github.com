// copy from http://blog.lxjwlt.com/front-end/2014/07/06/js-create-directory.html
(function(){
    var doc = document;
    function children(childNodes, reg) {
        var result = [],
            isReg = typeof reg === 'object',
            isStr = typeof reg === 'string',
            node, i, len;

        for (i = 0, len = childNodes.length; i < len; i++) {
            node = childNodes[i];

            if ((node.nodeType === 1 || node.nodeType === 9) &&
                (!reg ||
                    isReg && reg.test(node.tagName.toLowerCase()) ||
                    isStr && node.tagName.toLowerCase() === reg)) {

                result.push(node);
            }
        }
        return result;
    }

    // 创建目录
    function createDirectory(article, directory, isDirNum) {
        var contentArray = [],
            titleId = [],
            levelArray, root, level,
            currentList, list, li, link, i, len;

        // 获取标题编号 标题内容
        levelArray = (function(article, contentArray, titleId) {
            var titleElem = children(article.childNodes, /^h[23]$/),
                levelArray = [],
                lastNum = +titleElem[0].tagName.match(/\d/)[0],
                lastRevNum = 1,
                count = 0,
                lastRevNum, num, elem, rootNum = lastNum;

            while (titleElem.length) {
                elem = titleElem.shift();

                // 保存标题内容
                contentArray.push(elem.innerText);

                // 修正
                num = +elem.tagName.match(/\d/)[0] - rootNum + 1;

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
                elem.id = elem.id || elem.innerText.replace(/[\s&\/\\#,.+=$~%'":*?<>{}\]\[()@`]/g, "").toLowerCase();
                titleId.push(elem.id);
            }

            // 避免一开始就进入下一层
            if (count !== 0 && levelArray[0] === 1) levelArray[0] = 0;

            return levelArray;
        })(article, contentArray, titleId);

        // 构造目录
        currentList = root = doc.createElement('ul');
        var dirNum = [0];
        for (i = 0, len = levelArray.length; i < len; i++) {
            level = levelArray[i];
            if (level === 1) {
                list = doc.createElement('ul');
                if (!currentList.lastElementChild) {
                    currentList.appendChild(doc.createElement('li'));
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
            li = doc.createElement('li');
            link = doc.createElement('a');
            link.href = '#' + titleId[i];
            link.className = "plain-link";
            link.innerText = !isDirNum ? contentArray[i] :
                dirNum.join('.') + '. ' + contentArray[i];
            li.appendChild(link);
            currentList.appendChild(li);
        }

        if (len) {
            directory.innerHTML = "<h2>目录</h2>";
            directory.appendChild(root);
        }
    }

    try {
        createDirectory(doc.querySelector('.toc-src'),
            doc.querySelector('[data-js-toc]'), true);
    } catch (e) {}
})();
