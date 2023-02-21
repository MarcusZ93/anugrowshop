require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const ejs = require('ejs');

const homeRouter = require('../routes/homeRoutes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', homeRouter);




app.listen(port, () => console.log(`Example app listening on port ${port}!`));


