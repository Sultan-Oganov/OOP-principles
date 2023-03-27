const generateRandomId = () => Math.random() * 1000;

class User {
    private _id: number;
    private _username: string;
    private _password: string;

    constructor( username: string, password: string) {
        this._username = username;
        this._password = password;
        this._id = generateRandomId();
    }

    public get username() : string {
        return this._username;
    }
    
    public set username(v : string) {
        this._username = v;
    }

    public get password() : string {
        return this._password;
    }

    public set password(v : string) {
        this._password = v;
    }

    public get id() : number {
        return this._id;
    }    
}

const user = new User('Sultan', 'admin');

user.username = 'admin';
user.password = 'password';
