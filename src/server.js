import express from "express";
import dotenv, { configDotenv } from "dotenv";
import mustache from "mustache-express";
import path from "path";

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();   

import MainRoutes from './router/router.js';




const server = express();
server.set("view engine", "mustache"); // criação de template
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());
server.use(express.static(path.join(__dirname, "../public")));

server.use(MainRoutes);
server.use((req, res)=>{
    res.render('pages/404');
});


server.listen(process.env.PORT);