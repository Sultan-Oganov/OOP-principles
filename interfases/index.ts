interface User {
    username: string;
    age: number;
}
interface Car {
    name: string;
    age: number;
}

interface Repository<T> {
    create: (obj: T) => T;
    read: (obj: T) => T;
    update: (obj: T) => T;
    delete: (obj: T) => T;
}
//implements - говорит что класс должен реализовать все методы из интерфейса
//имплементироваться можно от многих интерфейсов и классов, а наследоваться только от одного

class UserRepo implements Repository<User> {
    create(obj: User): User {
        return obj;
    }
    read(obj: User): User {
        return obj;
    }
    update(obj: User): User {
        return obj;
    }
    delete(obj: User): User {
        return obj;
    }
}

class CarRepo implements Repository<Car> {
    create(obj: Car): Car {
        return obj;
    }
    read(obj: Car): Car {
        return obj;
    }
    update(obj: Car): Car {
        return obj;
    }
    delete(obj: Car): Car {
        return obj;
    }
}