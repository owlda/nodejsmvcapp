const productsInModel = [];

module.exports = class Product{

    constructor(t){
            
        this.title = t;


    }

    save(){
           
        productsInModel.push(this);
    }

    static readAll(){
        
        return productsInModel;
    }

}