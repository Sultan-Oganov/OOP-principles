
class DataBase {
    url: number;
    private static inctance: DataBase;

    constructor() {
        if(DataBase.inctance) {
            return DataBase.inctance;
        }
        this.url = Math.random();
        DataBase.inctance = this;
    }
}

const db1 = new DataBase();
const db2 = new DataBase();

console.log(db1.url);
console.log(db2.url);