/**
 * ---------------------------------
 * TypeScript中文手册
 * ---------------------------------
 * product: TypeScript
 * Module Name: 接口
 * Date Created: 2019-06-04
 * Description: 接口定义
 * 让我们开发这个示例应用,这里我们使用接口来描述一个拥有firstName和lastName字段的对象,在TypeScript里,只在两个类型内部的结构兼容那么这两个类型就是兼容的,这就允许我们在实现接口时候只要保证包含接口要求的结构就可以,而不必明确的使用implements语句
 * ----------------------------------
 * Modification History 
 * DATE Name Descritption 
 * ----------------------------------
 * 2019-06-04 随笔川迹
 * ----------------------------------
 * 
 */
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello," + person.firstName + " "+ person.lastName;
}

let user =  { firstName: "Jane", lastName: "User"};

document.body.innerHTML =  greeter(user);