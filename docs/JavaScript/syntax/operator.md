---
title: Operator
language: javascript
---

## new

作用

1. 创建一个对象
1. 将构造函数的作用域赋给新对象
1. 执行构造函数中的代码
1. 返回新对象(对象的存在指向构造函数的属性[[Prototype]])

## typeof

`typeof expression`

结果：

* "undefined"
* "boolean"
* "string"
* "number"
* "object"
* "function"

检测基本数据类型很方便

## instanceof

`variable instanceof constructor`

检测引用类型是否属于xx构造函数

## 一元操作符

* `+` 正
* `-` 负
* `--`
* `++`

## 位操作符

* `～`
* `&`
* `|`
* `^`
* `<<`
* `>>`
* `>>>`

## 布尔操作符

* `!`
* `&&`
* `||`

## 乘性操作符

* `*`
* `/`
* `%` 求余

## 加性操作符

* `+` 加
* `-` 减

## 关系操作符

* `>` Greater than
* `<` Less than
* `<=` Less than or equal to
* `>=` Greater than or equal to

## 相等操作符

* `===` 全等
* `!==` 不全等
* `==` 相等
* `!=` 不相等

## 条件操作符

* boolean_expression ? true_value :  false_value

## 赋值操作符

* `=`
* `*=`
* `%=`
* `+=`
* `%=`
* `+=`
* `-=`
* `<<=`
* `>>=`
* `>>>=`

## 逗号操作符

* `var num1 = 1, num2 = 3, num3 = 2;`
* `var num = (4, 5, 56, 7); // num == 7`
