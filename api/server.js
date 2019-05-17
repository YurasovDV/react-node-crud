const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4563;
const cors = require('cors');
const businessRoute = require('./business.route');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/business', businessRoute);

app.listen(PORT, function () {
    console.log('Server is running on port', PORT);
});