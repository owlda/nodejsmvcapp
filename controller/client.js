// GET Clients
exports.getClientsPage = (req, res, next) => {   
    res.render('clients', {      
      pageTitle: 'Clients',
      path: '/clients',
      hasClients: true
    });
  }