// dependencies
const express = require('express');

// instantiates server
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// instructs server to listen for requests; 'sync' method connects models to db tables and if tables do not exist Sequelize will create them; 'force: boolean' determines whether db tables will be dropped and recreated on startup
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening.'));
});