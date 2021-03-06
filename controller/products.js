// Product Model
const Product = require('../model/product');

// GET Products
exports.getProductsPage = (req, res, next) => {
  
  Product.readAll()
  .then(
    products => {       
      res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',        
        activeShop: true,
        productCSS: true
    });  
  
  }).catch( err => { console.log(err)});
  
}

// GET Product
exports.getProduct = (req, res, next) => { 
  // request film id
  const prodID = req.params.productid;

  
  Product.readOne(prodID)
  .then( product => {       
      res.render('details', {
        prods: product,
        pageTitle: 'Details',
        path: '/details',        
        activeShop: true,
        productCSS: true
            
    });  
  
  }).catch( err => { console.log(err)});
  
}