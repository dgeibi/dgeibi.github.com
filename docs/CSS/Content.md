---
title: CSS Content
---

## content 属性

selectors:before 和 selectors:after 里的 [content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content)

|值|说明|
|--|----|
|"string"|文本内容|
|`url("http://www.baidu.com/")`|URI值会指定一个外部资源（比如图片）。如果该资源或图片不能显示，它就会被忽略或显示一些占位（比如无图片标志）|
|open-quote close-quote|这些值会被 [quotes](https://developer.mozilla.org/zh-CN/docs/Web/CSS/quotes) 中定义的字符串替换|
|no-open-quote no-close-quote|不会生产任何内容，但是会改变（增加或降低）引号层级|
|[counter](http://www.w3schools.com/css/css_counters.asp)|计数|

## background

```css
/* Using a <background-color> */
background: green;

/* Using a <bg-image> and <repeat-style> */
background: url("test.jpg") repeat-y;

/* Using a <box> and <background-color> */
background: border-box red;

/* <repeat-style>， <position>， <bg-image> */
background: no-repeat center/80% url("../img/image.png");
```

* [background-attachment](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment)
* [background-clip](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)
* [background-image](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image)
* [background-repeat](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat)
* [background-position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position)
* [background-size](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size)

### background-attachment

决定背景是在视口中固定的还是随包含它的区块滚动

|Value|Description|
|-----|-----------|
|scroll|The background scrolls along with the element. This is default|
|fixed|The background is fixed with regard to the viewport|
|local|The background scrolls along with the element's contents|
|initial|Sets this property to its default value. Read about initial|
|inherit|Inherits this property from its parent element. Read about inherit|

### background-clip

|值|说明|
|--|----|
|border-box|背景延伸到边框外沿|
|padding-box|背景延伸到内边距外沿|
|content-box|背景裁剪到内容区外沿|

### background-image

```css
background-image: none;
background-image: url(http://www.example.com/bck.png);
```

### background-color

```css
/* Keyword values */
background-color: red;

/* Hexadecimal value */
background-color: #bbff00;

/* RGB value */
background-color: rgb(255, 255, 128);

/* HSLA value */
background-color: hsla(50, 33%, 25%, 0.75);

/* Special keyword values */
background-color: currentColor;
background-color: transparent;  /* initial */

/* Global values */
background-color: inherit;
background-color: initial;
background-color: unset;
```

### background-repeat

| Value     | Description                                                                             |
|-----------|-----------------------------------------------------------------------------------------|
| repeat    | The background image will be repeated both vertically and horizontally. This is default |
| repeat-x  | The background image will be repeated only horizontally                                 |
| repeat-y  | The background image will be repeated only vertically                                   |
| no-repeat | The background-image will not be repeated                                               |

实验性：round, space

### background-position

|Value|Description|
|-----|-----------|
|left top|If you only specify one keyword, the other value will be "center"|
|left center|If you only specify one keyword, the other value will be "center"|
|left bottom|If you only specify one keyword, the other value will be "center"|
|right top|If you only specify one keyword, the other value will be "center"|
|right center|If you only specify one keyword, the other value will be "center"|
|right bottom|If you only specify one keyword, the other value will be "center"|
|center top|If you only specify one keyword, the other value will be "center"|
|center center|If you only specify one keyword, the other value will be "center"|
|center bottom	|If you only specify one keyword, the other value will be "center"|
|x% y%|The first value is the horizontal position and the second value is the vertical. The top left corner is 0% 0%. The right bottom corner is 100% 100%. If you only specify one value, the other value will be 50%. . Default value is: 0% 0%|
|xpos ypos|The first value is the horizontal position and the second value is the vertical. The top left corner is 0 0. Units can be pixels (0px 0px) or any other CSS units. If you only specify one value, the other value will be 50%. You can mix % and positions|
