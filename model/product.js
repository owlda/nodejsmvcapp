const getDB = require('../util/database').mongoConnectFunctionGetDB;

module.exports = class Product{

    constructor(title, price, desc, image){
            
        this.title = title;
        this.price = price;
        this.desc = desc;
        this.image = image;

    }

    save(){
           
       const _db = getDB();
       _db.collection('products').insertOne(this);

    }

    static readAll(){

        const _db = getDB();

        return _db
        .collection('products')
        .find()
        .toArray()
        .then(products => {

            console.log( products );
            return products;
            
        })
        .catch(error => { console.log(error) } );  
    }

}