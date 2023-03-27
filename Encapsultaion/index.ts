// Инкапсуляция – это свойство системы,
// позволяющее объединить данные и методы,
// работающие с ними, в классе и скрыть детали
// реализации от пользователя.


class Rectangle {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) { 
        this._width = width;
        this._height = height;
    }

    public get width() { 
        return this._width; 
    }

    public set width(value: number) {
        if(value <= 0) {
            this._width = 1;
        }else {
            this._width = value;
        }
    }

    public calcArea(): number { 
        return (this._width + this._height) * 2;
    }
}

const rect = new Rectangle(4, 2);


