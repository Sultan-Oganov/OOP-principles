interface User {
    username: string;
    age: number;
}

interface UserRepo {
    getUsers: () => User[];
}

class UserMongoDBRepo implements UserRepo {
    getUsers(): User[] {
        console.log('Используем подключение к Mongo и получаем пользователей');
        return [{ age: 15, username: 'пользователь из Mongo DB' }]
    };
}

class UserPostgresRepo implements UserRepo {
    getUsers(): User[] {
        console.log('Используем подключение к POSTGRES и получаем пользователей');
        return [{ age: 15, username: 'пользователь из Postgres DB' }]
    };
}

class UserService {
    userRepo: UserRepo;

    constructor(userRepo: UserRepo) {
        this.userRepo = userRepo;
    }

    filterUserByAge(age: number) {
        const users = this.userRepo.getUsers();
        // ... Какая то логика по фильтрации 
        console.log(users);       
    }
}

const userService = new UserService(new UserMongoDBRepo());
userService.filterUserByAge(15)