// ARRAY of the products
const products = [];

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
    products.push({ title: req.body.title });
    res.redirect('/');
}

// GET Products
exports.getProductsPage = (req, res, next) => {   
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
}