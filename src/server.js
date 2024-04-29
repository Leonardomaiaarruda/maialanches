import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';

import mustacheExpress from 'mustache-express';
import {config} from 'dotenv';
import MainRoutes from './routes/routes.js'


const _dotenv = config();
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, "views"))

app.use(MainRoutes)

const porta = process.env.PORT
app.listen(10)