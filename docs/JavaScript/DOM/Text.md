---
title: Text, Comment, CDATASection
language: javascript
---

## Text

text 继承自 CharacterData、Text

### 文本节点的创建

```javascript
var element = document.createElement("div");
element.className = "message";

var textNode = document.createTextNode("Hello world!");
element.appendChild(textNode);

document.body.appendChild(element);
```

### 文本节点的属性与方法

```javascript
/* 以下 text 是 Text 的一个实例 */
text.nodeType // 3
text.nodeName // "#text"
text.nodeValue // -> text.textContent -> text.data // w/r
text.textContent // text content of text

text.wholeText // 返回当前Text节点与毗邻的Text节点的 data
text.getDestinationInsertionPoints()
text.assignedSlot
text.data   // text.textContent
text.length // -> text.data.length -> text.nodeValue.length 文本字符数
text.splitText(offset) // Text 类型特有 // 在offset处将文本分成两部分 // offset - 第n个字符后面（从1开始数）
text.substringData(offset, count)
text.appendData(textStr) // 将textStr追加到末尾
text.insertData(offset, textStr)
text.deleteData(offset, textStr)
text.replaceData(offset, count, textStr)
```

### 规范化文本节点

将连续的文本节点合并

```javascript
/* element 为文本节点所在的元素节点 */
element.normalize()
```

## Comment

```javascript
/*
<!--A comment -->
*/
var comment = document.createComment("A comment ");
comment.data // "A comment "
comment.length // 10
comment.substringData()
comment.appendData()
comment.insertData()
comment.deleteData()
comment.replaceData()
comment.nodeType // = 8
comment.nodeName // "#comment"
comment.nodeValue // "A comment "
comment.textContent
```

方法和属性比 Text 类少 splitText

## CDATASection

```javascript
/* XML document */
var cdataSection = document.createCDataSection("content");
cdataSection.nodeType // 4
cdataSection.nodeName // "#cdata-section"
cdataSection.nodeValue // "content"
/* no child */
```
