import express from "express";
import {
  findUniqueAuthor,
  findAuthors,
  updateAuthor,
  createNewAuthor,
  deleteAuthor,
  deleteUniqueAuthor,
} from "../Controllers/authors.controller.js";

const authorRouter = express.Router();

authorRouter.get('/authors/find', findUniqueAuthor)
authorRouter.put('/authors/update', updateAuthor)
authorRouter.get('/authors/findall', findAuthors)
authorRouter.post('/authors/create', createNewAuthor)
authorRouter.delete('/authors/delete', deleteAuthor)
authorRouter.delete('/authors/delete/unique', deleteUniqueAuthor)

export default authorRouter;
