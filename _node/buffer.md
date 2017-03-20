---
title: Buffer
---

Now that TypedArray has been added in ES6, the Buffer class implements the Uint8Array API in a manner that is more optimized and suitable for Node.js' use cases.

buffer 的单位是1字节

## Buffer.from(), Buffer.alloc(), and Buffer.allocUnsafe()

- `new Buffer(10)` 这样返回的 Buffer 的数据是不确定的，语义含糊，所以该操作是不被推荐的。
- 传入 string/array/Buffer 作为第一个参数，该参数数据的拷贝被分配给新的 Buffer 实例，返回该实例。
- 传入一个 ArrayBuffer 实例返回和它共用内存的一个 Buffer 实例。

Buffer.from(array) array 的拷贝被分配给新的 Buffer 实例，返回该实例

Buffer.from(arrayBuffer[, byteOffset [, length]]) 返回和 arrayBuffer 共用内存的一个 Buffer 实例

Buffer.from(buffer) buffer 的拷贝被分配给新的 Buffer 实例，返回该实例

Buffer.from(string[, encoding]) string 的拷贝被分配给新的 Buffer 实例，返回该实例

Buffer.alloc(size[, fill[, encoding]]) 返回一个 size 字节的，已经初始化的 Buffer 实例。

Buffer.allocUnsafe(size) 返回一个 size 字节的，未初始化的 Buffer 实例，刚创建的 buffer 的内存是未知的，可能含有敏感数据？。

Buffer.allocUnsafeSlow(size) 和 Buffer.allocUnsafe 一样都创建未初始化的 buffer，但是。。？
