const express = require('express');
const articlesRoutes = express.Router();


let articlesGLOBAL = [{ id: 1, title: 'hardcoded article', content: 'content1' }, { id: 2, title: 'hardcoded article 22', content: 'content2' }];

articlesRoutes.route('/add').post(function(req, res){
    console.log(req.body);
    req.body.id = articlesGLOBAL.length;
    articlesGLOBAL.push(req.body);

    res.setHeader('Content-Type', 'application/json');
    const added = JSON.stringify(req.body);
    res.write(added);
    res.status(201);
    res.end();
});

articlesRoutes.route('/').get(function(req, res){
    res.json(articlesGLOBAL);
});

module.exports = articlesRoutes;