// dependencies
const express = require('express');
const path = require('path');

// instantiates server
const app = express();
const PORT = process.env.PORT || 3001;

// connects to db
const sequelize = require('./config/connection');

// connects to static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// instructs server to listen for requests; 'sync' method connects models to db tables and will create tables if non-existant; 'force: boolean' determines whether to drop and recreate db tables on startup
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}.`));
});