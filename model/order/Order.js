const db = require('../../config/db')

class Orders {
    constructor(food_id, qty) {
        this.food_id = food_id;
        this.qty = qty;
    }

    create() {
        let sql = `INSERT INTO order(food_id,qty)
                VALUES('${this.food_id}','${this.qty}')`;
        return db.execute(sql);
    }

    static getAll() {
        let sql = `SELECT i.id as id,
                          f.food_name as food_name,
                          o.qty as oty,
                          f.price as unit_price,
                          (o.qty*f.price) as total_price
                          FROM order as o 
                    INNER JOIN food as f ON
                    o.food_id = f.id`;
        return db.execute(sql);
    }
}

module.exports = Orders