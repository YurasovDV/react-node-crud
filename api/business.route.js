const express = require('express');
const businessRoutes = express.Router();


let businessesGLOBAL = [];

businessRoutes.route('/add').post(function(req, res){
    console.log(req.body);
    businessesGLOBAL.push(req.body);
    res.status(200);
});


businessRoutes.route('/').get(function(req, res){
    res.json(businessesGLOBAL);
});

module.exports = businessRoutes;