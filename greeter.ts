function greeter(person: string) {
    return "Hello," + person;
}

let user = "Hello world";

document.body.innerHTML = greeter(user);