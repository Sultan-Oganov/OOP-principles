// Полиморфизм – это свойство системы использовать объекты
// с одинаковым интерфейсом без информации о типе и внутренней структуре объекта.

class Person {
    public _firstName: string;
    public _lastName: string;
    public _age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    public get getFullName(): string {
        return `Фамилия - ${this._lastName} Имя - ${this._firstName}`;
    }

    public greeting(): void {
        console.log(`Привет я человек и меня зовут ${this._firstName}`);
    }
}

class Employee extends Person {
    private _inn: string;
    private _number: number;
    private _snils: string;

    constructor(firstName: string, lastName: string, age: number, inn: string, number: number, snils: string) {
        super(firstName, lastName, age);
        this._inn = inn;
        this._number = number;
        this._snils = snils;
    }

    public greeting(): void {
        console.log(`Привет я работник и меня зовут ${this._firstName}`);
    }
}
class Developer extends Employee {
    private _level: string;
    private _language: string;

    constructor(firstName: string, lastName: string, age: number, inn: string, number: number, snils: string, level: string, language: string) {
        super(firstName, lastName, age, inn, number, snils);
        this._level = level;
        this._language = language;
    }

    public greeting(): void {
        console.log(`Привет я разработчик и меня зовут ${this._firstName}`);
    }
}

const person = new Person('person', 'person', 10);
const employee = new Employee('employee', 'employee', 10, 'inn', 1111111, 'snils');
const dev = new Developer('dev', 'dev', 10,  'inn', 1111111, 'snils', 'middle', 'JS');

const personList: Person[] = [person, employee, dev];

const massGreeting = (persons: Person[]) => {
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        person.greeting();
    }
}

massGreeting(personList);