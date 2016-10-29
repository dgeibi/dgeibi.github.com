---
title: Number
---

## toFixed()

* 语法：`numObj.toFixed(digits)`
* 功能：使用定点表示法来格式化一个数，自动舍入
* 返回值：字符串

```javascript
var numObj = 12345.6789;

numObj.toFixed();         // 返回 "12346"：进行四舍五入，不包括小数部分
numObj.toFixed(1);        // 返回 "12345.7"：进行四舍五入

numObj.toFixed(6);        // 返回 "12345.678900"：用 0 填充

(1.23e+20).toFixed(2);    // 返回 "123000000000000000000.00"

(1.23e-10).toFixed(2);    // 返回 "0.00"

2.34.toFixed(1);          // 返回 "2.3"

-2.34.toFixed(1);         // 返回 -2.3 （由于操作符优先级，负数不会返回字符串）

(-2.34).toFixed(1);       // 返回 "-2.3" （若用括号提高优先级，则返回字符串）
```

## toExponential()

* 语法：

        numObj.toExponential(fractionDigits)

* 功能：以指数表示法返回该数值字符串表示形式

```javascript
var numObj = 77.1234;

alert("numObj.toExponential() is" + numObj.toExponential()); // 输出 7.71234e+1

alert("numObj.toExponential(4) is" + numObj.toExponential(4)); // 输出 7.7123e+1

alert("numObj.toExponential(2) is" + numObj.toExponential(2)); // 输出 7.71e+1

alert("77.1234.toExponential() is" + 77.1234.toExponential()); // 输出 7.71234e+1

alert("77 .toExponential() is" + 77 .toExponential()); // 输出 7.7e+1
```

## toPrecision()

* 语法：`numObj.toPrecision(precision)`
* 功能：以指定的精度返回该数值对象的字符串表示

```javascript
var numObj = 5.123456;
console.log("numObj.toPrecision()  is" + numObj.toPrecision());  // 输出 5.123456
console.log("numObj.toPrecision(5) is" + numObj.toPrecision(5)); // 输出 5.1235
console.log("numObj.toPrecision(2) is" + numObj.toPrecision(2)); // 输出 5.1
console.log("numObj.toPrecision(1) is" + numObj.toPrecision(1)); // 输出 5

// 注意：在某些情况下会以指数表示法返回
console.log((1234.5).toPrecision(2)); // "1.2e+3"
```
