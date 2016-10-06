---
title: Object
language: javascript
lang: en
---

## Object.create()

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

`Object.create(proto[, propertiesObject])`

## Object.defineProperty()

[Object.defineProperty() - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

The method creates or modifies a property on an object directly, return the object.

Syntax:

```javascript
Object.defineProperty(obj, prop, descriptor)
```

Parameters:

- obj: object on which to create the property.
- prop: string, the name of the property to be defined.
- descriptor: the descriptor of the property to be defined.

Both data and accessor descriptors (数据属性和访问器属性的描述符) are objects.

They shared the following required keys:

|Key|Description|Default|
|---|---|---|
| configurable | true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object. |false|
| enumerable | true if and only if this property shows up during enumeration of the properties on the corresponding object.|false|

A data descriptor also has the following optional keys:

|Key|Description|Default|
|---|---|---|
| Value | The value associated with the property.| undefined |
| writable| true or false. true if and only if the value associated with the property may be changed with an assignment operator.| false |

An accessor descriptor also has the following optional keys:

|Key|Description|Default|
|---|---|---|
| get| A function which serves as a getter for the property, or undefined if there is no getter. The function return will be used as the value of property. The function has no parameter. | undefined |
| set| A function which serves as a setter for the property, or undefined if there is no setter. The function will receive as only argument the new value being **assigned** to the property. | undefined |

## Object.keys()

return an array of a given object's own enumerable properties

##  Object.getOwnPropertyNames()

return an array of all properties (enumerable or not) found directly upon a given object.

## isPrototypeOf()

`prototypeObj.isPrototypeOf(obj)`

## hasOwnProperty()

`obj.hasOwnProperty(prop)`
