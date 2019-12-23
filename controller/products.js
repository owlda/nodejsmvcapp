// ARRAY of the products
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
    
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

// GET Products
exports.getProductsPage = (req, res, next) => {
  
  const products = Product.readAll();
  
  res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
  });
  
}