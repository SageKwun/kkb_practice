const buf1 = Buffer.alloc(10); // 创建10字节的内存空间
console.log(buf1);

const buf2 = Buffer.from("a"); // 16进制 ascll
console.log(buf2);

const buf3 = Buffer.from("汉字"); // utf-8 变长 一个汉字3个字节
console.log(buf3);

const buf4 = Buffer.concat([buf2, buf3]); // 连接buffer
console.log(buf4, buf4.toString());
