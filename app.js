const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const clientRoutes = require('./routes/client');
const clientAuth = require('./routes/auth');
const errorController = require('./controller/error');
const mongoConnectFunction = require('./util/database').mongoConnectFunction;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(clientRoutes);
app.use(clientAuth);
app.use(errorController.gerError404);

mongoConnectFunction (() => {
    app.listen(3000);
});


