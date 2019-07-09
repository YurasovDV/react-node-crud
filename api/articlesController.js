let articlesGLOBAL = [
  { id: 1, title: 'hardcoded article', content: 'content1' },
  { id: 2, title: 'hardcoded article 22', content: 'content2' }
];

parseId = (request) => {
  const id = parseInt(request.params.id);
  return id;
}

const getAll = function (req, res) {
  res.json(articlesGLOBAL);
};

const getById = function (req, res) {
  const id = parseId(req);
  console.log(`get: id=${id}`);
  const found = articlesGLOBAL.find(it => it.id === id);
  console.log(found);
  res.json(found);
  res.end();
};

const deleteArticle = function (req, res) {
  const id = parseId(req);
  console.log(`delete: id=${id}`);
  articlesGLOBAL = articlesGLOBAL.filter(it => it.id !== id);
  res.status(200);
  res.end();
}

const update = function (req, res) {
  const id = parseId(req);
  console.log(`put: id=${id}`);
  const found = articlesGLOBAL.find(it => it.id === id);
  found.title = req.body.title;
  found.content = req.body.content;
  res.status(200);
  console.log(found);
  res.json(found);
  res.end();
};

const create = function (req, res) {
  console.log(`add, body=${JSON.stringify(req.body)}`);
  req.body.id = articlesGLOBAL.length + 1;
  articlesGLOBAL.push(req.body);

  res.setHeader('Content-Type', 'application/json');
  const added = JSON.stringify(req.body);
  res.write(added);
  res.status(201);
  res.end();
};

module.exports = { create, update, getAll, getById, deleteArticle };