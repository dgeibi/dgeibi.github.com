---
title: Function
language: js
---

## 函数声明提升

```javascript
hoisted(); // logs "foo"

function hoisted() {
  console.log("foo");
}
```

```javascript
//函数表达式不会提升
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log("bar");
};
```

## 函数内部属性

### arguments

`arguments`是类数组对象。

通过 `arguments` 对象访问参数「数组」，在非严格模式下，`arguments[i]` 与 `argi` 始终相互同步。

`arguments.callee` -> 拥有 arguments 对象的数组

### this

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)

```javascript
var color = "yellow";
var obj = {};
obj.color = "red";
obj.test = function() {console.log(color);};
obj.test(); // yellow
obj.test = function() {console.log(this.color);};
obj.test(); // red
```

## 函数属性和方法

### Function.prototype.apply()

* 语法：`fun.apply(thisArg[, argsArray])`

### Function.prototype.call()

* 语法：`fun.call(thisArg[, arg1[, arg2[, ...]]])`

### Function.prototype.bind()

* 语法：`fun.bind(thisArg[, arg1[, arg2[, ...]]])`
* 功能：创建一个新函数，当这个新函数被调用时，它的this值是传递给bind()的第一个参数，它的参数是bind()的其他参数和其原本的参数。
