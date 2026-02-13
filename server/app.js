import express, { response } from 'express';
import testRouter from './controllers/test.route.js'

const app = express();

app.use(express.json())

app.use('/v1',testRouter )



export default app;