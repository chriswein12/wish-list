// npm dependencies
require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
// const exphbs = require('express-handlebars');

// instantiate server
const app = express();
const PORT = process.env.PORT || 3001;

// connect to db and set up/store sessions
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// define session data
const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// const helpers = require('./utils/helpers');
// const hbs = exphbs.create({});

app.use(bodyParser.json());
app.use(session(sess));

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// access routes and static files
app.use(require('./controllers'));
app.use(express.static(path.join(__dirname, 'public')));

// format POST and PUT data to facilitate server requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// instruct server to listen for requests; 'sync' method connects models to db tables and will create tables if non-existant; 'force: boolean' determines whether to drop and recreate db tables on startup
sequelize.query("SET FOREIGN_KEY_CHECKS = 0")
.then (() => {
    return sequelize.sync({ force: false })
})
.then (() => {
    return sequelize.query("SET FOREIGN_KEY_CHECKS = 1")
})
.then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}.`));
})
.catch(err => {
    console.error('Unable to connect to the database.', err)
});