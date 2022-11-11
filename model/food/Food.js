const db = require('../../config/db')

class Orders{
    constructor(food_name,price) {
        this.food_name = food_name;
        this.price = price;
    }
    create(){
        let sql = `INSERT INTO order(food_name,price)
                VALUES('${this.food_name}','${this.price}')`;
        return db.execute(sql);
    }
}