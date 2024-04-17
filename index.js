import express from 'express'
import { StatusCodes } from "http-status-codes";
import morgan from 'morgan';
import {updateAuthor,findAuthors,findUniqueAuthor, createNewAuthor,deleteAuthor, deleteUniqueAuthor} from './Controllers/authors.controller.js';

const App = express();

const PORT = 5000;

//Middleware
App.use(morgan('dev'))
App.use(express.json())
// App.use('/', AuthorRouters)


//Request Handlers
App.get('/', (req, res) => {
    res.status(StatusCodes.ACCEPTED).json({message: "Hello!, welcome to the Quote API!"});
})
App.get('/authors/find', findUniqueAuthor)
App.put('/authors/update', updateAuthor)
App.get('/authors/findall', findAuthors)
App.post('/authors/create', createNewAuthor)
App.delete('/authors/delete', deleteAuthor)
App.delete('/authors/delete/unique', deleteUniqueAuthor)


App.listen(PORT, (req, res) => {
    console.log(`Server running on http://localhost:${PORT}`)
})