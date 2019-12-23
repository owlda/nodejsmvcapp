const productsInModel = [];

module.exports = class Product{

    constructor(title, price, desc, image){
            
        this.title = title;
        this.price = price;
        this.desc = desc;
        this.image = image;

    }

    save(){
           
        productsInModel.push(this);
    }

    static readAll(){
        
        return productsInModel;
    }

}