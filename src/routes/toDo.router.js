const { getAll, create, remove, getOne, update } = require('../controllers/toDo.controllers');
const express = require('express');

const toDoRouter = express.Router();

toDoRouter.route("/todos")
	.get(getAll)
    .post(create);

toDoRouter.route("/todos/:id")
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = toDoRouter;
