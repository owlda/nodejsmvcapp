// Product Model
const Product = require('../model/product');

// GET addProduct page
exports.getAddProductPage = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
}

// POST addProduct page
exports.postAddProductPage = (req, res, next) => {    
    
    const product = new Product(req.body.title, req.body.price, req.body.desc, req.body.image);
    product.save();
    res.redirect('/');
}

// GET Home page for admin
exports.getAdminPage = (req, res, next) => { 
          
        res.render('home-admin', {          
          pageTitle: 'Admin',
          path: '/admin/home-admin',        
          activeShop: true,
          productCSS: true
      });  

    
  }

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