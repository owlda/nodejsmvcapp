// GET page registration
exports.getSignUpPage = (req, res, next) => {   
    res.render('signup', {      
      pageTitle: 'Registration',
      path: '/registration',
      hasClients: false
    });
  }