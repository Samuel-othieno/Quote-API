import express from 'express'
import { StatusCodes } from "http-status-codes";
import morgan from 'morgan';
import authorRouter from './Routes/authors.route.js';
import cors from "cors";
import helmet from 'helmet';

const App = express();

//Middleware
App.use(morgan('dev'))
App.use(express.json())
App.use(cors())
App.use(helmet())


//Request Handlers
App.get('/', (req, res) => {
    res.status(StatusCodes.ACCEPTED).json({message: "Hello!, welcome to the Quote API!"});
})

App.use('/quotes', authorRouter)

export default App;