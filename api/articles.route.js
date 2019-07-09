const express = require('express');
const ArticlesController = require('./articlesController');
const articlesRoutes = express.Router();

articlesRoutes.route('/').get(ArticlesController.getAll);

articlesRoutes.route('/:id').get(ArticlesController.getById);

articlesRoutes.route('/add').post(ArticlesController.create);

articlesRoutes.route('/:id').delete(ArticlesController.deleteArticle);

articlesRoutes.route('/:id').put(ArticlesController.update);

module.exports = articlesRoutes;