import { Router } from "express";
import * as Pages from '../controller/controllerPage.js'

const routes = Router();

routes.get('/', Pages.home)
routes.get('/pedidos', Pages.pedido)
routes.get('/menu', Pages.menubuttonprodutos)
routes.get('/cadastrodeproduto', Pages.cadastrodeproduto);
routes.get('/editar', Pages.editarprod);
routes.get('/deletar', Pages.deleterprod);

routes.post('/newprod', Pages.novoProduto);

export default routes;