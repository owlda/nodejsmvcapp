const getDB = require('../util/database').mongoConnectFunctionGetDB;
const mongodb = require('mongodb');

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
            return products;            
        })
        .catch(error => { console.log(error) } );  
    }

    static readOne(prodid){

        const _db = getDB();
        console.log(prodid);
        return _db
        .collection('products')
        .find({ _id: new mongodb.ObjectId(prodid) })
        .next()
        .then(product => {            
            return product;
        })    
        .catch(error => { console.log(error);
        }); 
    }

}