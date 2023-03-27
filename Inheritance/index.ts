// Наследование – это свойство системы, позволяющее описать новый класс
// на основе уже существующего с частично или полностью заимствующейся функциональностью.
// Класс, от которого производится наследование, называется базовым или родительским.
// Новый класс – потомком, наследником или производным классом.

class Person {
    private _firstName: string;
    private _lastName: string;
    private _age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public get age(): number {
        return this._age;
    }


    public set firstName(v: string) {
        this._firstName = v;
    }

    public set lastName(v: string) {
        this._lastName = v;
    }

    public set age(v: number) {
        if (v < 0) {
            this._age = 0;
        } else {
            this._age = v;
        }
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

}

const employee1 = new Employee('name', 'last', 123, 'sad', 12123123, 'sad');


class Developer extends Employee {
    private _level: string;
    private _language: string;

    constructor(firstName: string, lastName: string, age: number, inn: string, number: number, snils: string, level: string, language: string) {
        super(firstName, lastName, age, inn, number, snils);
        this._level = level;
        this._language = language;
    }
}

const Sul = new Developer('a','b',123,'inn',123123,'daasd','middle', 'JS');