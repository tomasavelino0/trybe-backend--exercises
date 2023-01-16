// usamos a palavra reservada class para definir uma classe
class Person {
    name: string;
    birthDate: Date; // o tipo Date está presente no TypeScript assim como no JavaScript
    age?: number;
    // aprenderemos mais sobre o construtor na próxima seção
    // considere-o como uma função utilizada para construir um objeto a partir da classe,
    // nele recebemos todos os dados necessários para construir um objeto de pessoa
    constructor(name: string, birthDate: Date, age?: number) {
        // usamos o this para acessar as propriedades da instância da classe,
        // ele representa a própria instância que estamos criando
        // atribuímos o valor do parâmetro recebido a propriedade da instância da classe
        this.name  = name;
        this.birthDate  = birthDate;
        this.age  = age;
    }

    speak(): void {
        console.log(`${this.name} está falando.`);
    }

    eat(): void {
        console.log(`${this.name} está comendo.`)
    }

    walk(): void {
        console.log(`${this.name} está andando.`)
    }
}

// usamos a palavra reservada new para criar uma instância de Person
// e passamos os parâmetros necessários para o construtor
const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), 42);

console.log(person1);
person1.speak()

console.log(person2);
person2.walk();

interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}

interface Teacher extends Employee {
    subject: string;
    sayHello(): string;
}

let teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    subject: "Matemática",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    },
    sayHello(): string {
        return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
    }
}

type Address = {
  street: string,
  number: number | null,
}

type User = {
  name: string,
  email: string,
  password: string,
}


function stringToJson<T, U>(str: string, id: U ): T & { id: U } {
    const result = JSON.parse(str);
    result.id = id;
    return result;
  }

  const user = stringToJson<User, number>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}', Date.now());

  const address = stringToJson<Address, string>('{"street":"Rua Tamarindo","number":1}', '#01')

user.name;
address.street;

function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items); // construindo um Array que só pode conter elementos do tipo T
  }
  
  const numberArray = getArray<number>([5, 10, 15, 20]);
  numberArray.push(25);
  numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação
  
  const stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
  stringArray.push("Rabbits");
  stringArray.push(30); // Isto vai gerar um erro de compilação
