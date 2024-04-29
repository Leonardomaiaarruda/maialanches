import { Sequelize } from "sequelize";
import {config} from 'dotenv';
const _dotenv = config();

// Criar uma nova instância do Sequelize
const name = process.env.DB_NAME
const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const pass = process.env.DB_PASSWORD;

const sequelize = new Sequelize(name, user , pass, {
  host:host , // Host do banco de
  dialect: 'mysql'   // Tipo do banco de  dadosdados 
});


export default sequelize;

