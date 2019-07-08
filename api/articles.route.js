const express = require('express');
const articlesRoutes = express.Router();


parseId = (request) => {
  const id = parseInt(request.params.id);
  return id;
}

let articlesGLOBAL = [
  { id: 1, title: 'hardcoded article', content: 'content1' },
  { id: 2, title: 'hardcoded article 22', content: 'content2' }
];

articlesRoutes.route('/').get(function (req, res) {
  res.json(articlesGLOBAL);
});

articlesRoutes.route('/:id').get(function (req, res) {
  const id = parseId(req);
  console.log(`get: id=${id}`);
  const found = articlesGLOBAL.find(it => it.id === id);
  console.log(found);
  res.json(found);
  res.end();
});

articlesRoutes.route('/add').post(function (req, res) {
  console.log(`add, body=${JSON.stringify(req.body)}`);
  req.body.id = articlesGLOBAL.length + 1;
  articlesGLOBAL.push(req.body);

  res.setHeader('Content-Type', 'application/json');
  const added = JSON.stringify(req.body);
  res.write(added);
  res.status(201);
  res.end();
});

articlesRoutes.route('/:id').delete(function (req, res) {
  const id = parseId(req);
  console.log(`delete: id=${id}`);
  articlesGLOBAL = articlesGLOBAL.filter(it => it.id !== id);
  res.status(200);
  res.end();
});

articlesRoutes.route('/:id').put(function (req, res) {
  const id = parseId(req);
  console.log(`put: id=${id}`);
  const found = articlesGLOBAL.find(it => it.id === id);
  found.title = req.body.title;
  found.content = req.body.content;
  res.status(200);
  console.log(found);
  res.json(found);
  res.end();
});

module.exports = articlesRoutes;