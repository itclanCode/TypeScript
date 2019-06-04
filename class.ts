/**
 * -----------------------------
 * TypeScript中文手册
 * -----------------------------
 * product: TypeScript
 * Module Name: 接口
 * Date Created: 2019-06-04
 * Description: 类定义
 * ------------------------------
 * 最后,让我们使用类来改写这个例子,TypeScript支持Javascript的新特性,比如:支持基于类的面向对象编程
 * 
 * 让我们创建一个Student类,它带有一个构造函数和一些公共字段,注意类和接口可以一起共作,程序员可以自行决定抽象的级别
 * 
 * 还要注意的是,在构造函数的参数上使用public等同于创建了同名的成员变量
 * 
 * 
 * 
 *  */

 class Student {
     fullName: string;
     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
         this.fullName = firstName+ "" + middleInitial + "" + lastName;
     }
 }

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello,"+ person.firstName + ""+ person.lastName;
}

let user = new Student("jane", "M", "user");

document.body.innerHTML = greeter(user);
