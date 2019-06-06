# TypeScript
TypeScript学习

### 基础类型

###介绍

为了让程序有价值,我们需要能够处理简单的数据单元,数字,字符串,结构体,布尔值等,TypeScript支持与javascript几乎相同的数据类型,此外还提供了实用的枚举型方便我们使用

### 布尔值

最基本的数据类型就是简单的true/false值,在javascript和TypeScript里叫做`boolean`其他语言也一样)

```
let isDone: boolean = false;
```

### 数字

和javascript一样,Typescript里面的所有数字都是浮点数,这些浮点数的类型是`number`,除了支持十进制和十六进制字面量,TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量
```
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
```

### 字符串

javascript程序的另一项基本操作是处理网页或服务器端的文本数据,像其他语言里一样,我们使用string表示文本数据类型,和javascript一样,可以使用双引号,""或者单引号'',表示字符串
```
let name: string = "bob";
name = "smith";
```
你还可以使用模板字符串,它可以定义多行文本和内嵌表达式,这种字符串是被反引号包围(`),并且以`${expr}` 这种形式嵌入表达式

```
let name: string = 'gene';
let age: number =  37;
let sentence: string = `Hello, my name is { name }`

I will be ${ age + 1 } years old next month`
```
这与下面定义的`sentence`的方式效果相同
```
let sentence: string = "Hello, my name is" + name + ".\n\n" + "I will be" + ( age + 1 ) + " years old next month"
```

### 数组


