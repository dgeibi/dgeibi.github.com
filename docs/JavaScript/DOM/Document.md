---
title: Document
language: javascript
---

## document

```javascript
document.nodeType // 9
document.nodeName // "#document"
document instanceof HTMLDocument
//-> true
document instanceof Document
//-> true
```

## Data

```javascript
/* userAgent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2816.0 Safari/537.36 */
document.ownerDocument   // null
document.URL             // 文档地址字符串（HTML 文档独有）== document.location.href
document.documentURI     // 文档地址字符串
document.origin          // 文档协议 + 域名
document.domain          // 域名
document.referrer        // Returns the URI of the page that linked to this page
document.characterSet    // "UTF-8"
document.charset         // "UTF-8"
document.inputEncoding   // 已废弃，返回一个字符串, 代表当前文档渲染时所使用的编码
document.contentType     // "text/html"
document.cookie          // r/w cookie
document.lastModified    // "09/26/2015 11:54:28" // 返回文档最后的修改时间
document.title           // 标题
document.dir             // 文档的文字方向；默认："ltr"; // "rtl" right to left
```

[document.location](/docs/JavaScript/Browser/Window/#location)

### document.readyState

* `"loading"`: 正在加载文档；
* `"interactive"`：加载外部资源阶段时；
* `"complete"`: 已经加载完文档

### document.implementation.hasFeature()

判断当前环境是否部署了特定版本的特定接口

```javascript
document.implementation.hasFeature(feature, version)
```

### document.designMode

控制当前文档能否编辑

值： `"on"`, `"off"`

### document.compatMode

返回渲染模式

* `"CSS1Compat"`："标准规范模式"
* `"BackCompat"`："混杂模式"

## DOM 元素

```javascript
document.documentElement // -> <html>
document.body       // <body>
document.head       // <head> || document.getElementsByTagName("head")[0]
document.defaultView    /* (DOM2)-> window IE: document.parentWindow -> window */
document.currentScript  // <script> element whose script is currently being processed.
document.images     // all <img>
document.all        // all tag
document.embeds     // all <OBJECT>
document.plugins    // all <embed>
document.anchors    // all <a>
document.links      // all <a> which has `href`
document.forms      // all <form>
document.applets    // all <applet>
document.scripts    // all <script>
document.activeElement // -> element which focused
document.scrollingElement
```

## 样式表

```javascript
document.selectedStylesheetSet // 被浏览器选择的样式表（返回 title 特性的内容）
```

- [document.preferredStyleSheetSet](https://developer.mozilla.org/en/docs/Web/API/Document/preferredStyleSheetSet)
- [document.styleSheets](/docs/JavaScript/DOM/Style/)

## document.getSelection()

IE9

== `window.getSelection()`

返回一个 Selection 对象，表示用户选择的文本。

## Create Something

```javascript
document.createDocumentFragment()
document.createTextNode()
document.createComment()
document.createProcessingInstruction()
document.createElement() //var newElement = document.createElement(tagName);
document.createElementNS()
document.caretRangeFromPoint()
document.createAttribute()
document.createEvent()
document.createAttributeNS()
document.createRange()
document.createNodeIterator()
document.createTreeWalker()
document.createCDATASection()
document.createExpression()
document.createNSResolver()
```

## Get Element

```javascript
document.getElementsByName()
document.getElementsByTagName()
document.getElementsByTagNameNS()
document.getElementsByClassName()
document.getElementById()
document.querySelector(cssSelector) // cssSelector: "img.button" "body"… return the first matched element
document.querySelectorAll(cssSelector) // return all matched elements
```

### document.elementFromPoint()

```javascript
var element = document.elementFromPoint(x, y);
```

* x, y 是相对左上角的坐标（px）
* 返回位于这个位置的 DOM 元素，如果该元素不可返回（比如文本框的滚动条），则返回它的父元素（比如文本框）。如果坐标值无意义（比如负值），则返回 null。

### document.elementsFromPoint()

与 `document.elementFromPoint()` 的区别是返回的是一个数组，如 `<p>` `<div>` `<body>` `<html>`

## document.importNode(), document.adoptNode()

### document.importNode()

DOM 2

```javascript
var node = document.importNode(externalNode, deep);
```

node: The new node that is imported into the document. The new node's parentNode is null, since it has not yet been inserted into the document tree.
externalNode: The node from another document to be imported.

deep: A boolean, indicating whether the descendants of the imported node need to be imported.

### document.adoptNode()

DOM3 Core

```javascript
var node = document.adoptNode(externalNode);
```

The node (externalNode) and its subtree is removed from the document it's in (if any), and its ownerDocument is changed to the current document.

## Write

```javascript
document.open() // open a empty document for writing
document.close() // close a document stream for writing
document.write()
document.writeln() // http://www.w3schools.com/javascriptref/met_doc_writeln.asp
```

document.hasFocus() // 确定文档是否获得焦点

## Rich Text Format

### 前提

#### 利用 iframe

```html
<iframe src="blank.html" width="100px" height="100px" name="richedit"></iframe>
<script type="text/javascript">
    window.addEventListener("load", function() {
        frames["richedit"].document.designMode = "on";
    });
</script>
```

#### 使用 contenteditable 属性

```html
<div class="editable" id="richedit" contenteditable>

</div>
```

### document.execCommand()

[document.execCommand - Web API 接口 \| MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand)

document.execCommand() 可以执行特定的指令以操控可编辑区域的内容。

```javascript
var bool = document.execCommand(commandName, showDefaultUI, valueArgument)
```

返回：布尔值，命令不受支持或为启用时返回 false。

参数：

- commandName：命令名称。
- showDefaultUI：通常为 false，因为 Firefox 不支持。
- valueArgument：与命令配合使用的值参数。

其它方法：

- document.queryCommandEnabled(command)：确定命令是否已启用，反映在选择的文本应用指定命令是否合适。
- document.queryCommandSupported(command)：确定指定命令是否受到浏览器支持。
- document.queryCommandIndeterm(command)：确定指定命令是否在不确定的 (indeterminate) 状态。
- document.queryCommandState(command)：确定是否已经将指定命令应用到选择的文本。
- document.queryCommandValue(command)：返回选择的文本应用指定命令时传递的值。

## DocumentType

```javascript
/*
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
*/
document.doctype.name // "html"
document.doctype.publicId // "-//W3C//DTD XHTML 1.0 Strict//EN"
document.doctype.systemId // "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"
document.doctype.nodeType // 10
document.doctype.nodeName // "html"
```

## Create Document

IE9

### 创建一个 DocumentType 的实例

```javascript
var doctype = document.implementation.createDocumentType(qualifiedNameStr, publicId, systemId)
```

### 创建一个 XML 文档

```javascript
var doc = document.implementation.createDocument(namespaceURI, qualifiedNameStr, documentType);
```

### 创建一个 HTML 文档

```javascript
var newDoc = document.implementation.createHTMLDocument(title);
```

## 事件处理程序

```javascript
document.onreadystatechange
document.onpointerlockchange
document.onpointerlockerror
document.onbeforecopy
document.onbeforecut
document.onbeforepaste
document.oncopy
document.oncut
document.onpaste
document.onsearch
document.onselectionchange
document.onselectstart
document.onwheel
document.onwebkitfullscreenchange
document.onwebkitfullscreenerror
document.onabort
document.onblur
document.oncancel
document.oncanplay
document.oncanplaythrough
document.onchange
document.onclick
document.onclose
document.oncontextmenu
document.oncuechange
document.ondblclick
document.ondrag
document.ondragend
document.ondragenter
document.ondragleave
document.ondragover
document.ondragstart
document.ondrop
document.ondurationchange
document.onemptied
document.onended
document.onerror
document.onfocus
document.oninput
document.oninvalid
document.onkeydown
document.onkeypress
document.onkeyup
document.onload
document.onloadeddata
document.onloadedmetadata
document.onloadstart
document.onmousedown
document.onmouseenter
document.onmouseleave
document.onmousemove
document.onmouseout
document.onmouseover
document.onmouseup
document.onmousewheel
document.onpause
document.onplay
document.onplaying
document.onprogress
document.onratechange
document.onreset
document.onresize
document.onscroll
document.onseeked
document.onseeking
document.onselect
document.onshow
document.onstalled
document.onsubmit
document.onsuspend
document.ontimeupdate
document.ontoggle
document.onvolumechange
document.onwaiting
document.onpointercancel
document.onpointerdown
document.onpointerenter
document.onpointerleave
document.onpointermove
document.onpointerout
document.onpointerover
document.onpointerup
```

## Others

* [Document.evaluate()](https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate)
* [Document.registerElement()](https://developer.mozilla.org/en/docs/Web/API/Document/registerElement)
* [Document.exitPointerLock()](https://developer.mozilla.org/en-US/docs/Web/API/Document/exitPointerLock)

```javascript
document.hidden //attribute
document.visibilityState
document.webkitVisibilityState
document.webkitHidden
document.fonts
document.webkitIsFullScreen
document.webkitCurrentFullScreenElement
document.webkitFullscreenEnabled
document.webkitFullscreenElement
document.pointerLockElement
document.webkitCancelFullScreen()
document.webkitExitFullscreen()
```
