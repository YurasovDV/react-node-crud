const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3001;
const cors = require('cors');
const articlesRoutes = require('./articles.route');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/articles', articlesRoutes);

app.listen(PORT, function () {
    console.log('Server is running on port', PORT);
});