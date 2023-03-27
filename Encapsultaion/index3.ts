class DataBase {
    private _url: string;
    private _port: string;
    private _username: string;
    private _password: string;
    private _tables: any[];

    constructor(url: string, port: string, username: string, password: string) {
        this._url = url;
        this._port = port;
        this._username = username;
        this._password = password;
        this._tables = [];
    }

    public createNewTable(table: any): void { 
        this._tables.push(table);
    }

    public clearTables(): void { 
        this._tables = [];
    }

    public get url() : string {
        return this._url;
    }

    public get port() : string {
        return this._port;
    }

    public get username() : string {
        return this._username;
    }    

    public get password() : string {
        return this._password;
    }   
    
    public get tables() : string[] {
        return this._tables;
    }   


}

const db = new DataBase('1', '2', '3', '4');
