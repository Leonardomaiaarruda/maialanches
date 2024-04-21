import { Router } from "express";
import * as Pages from '../controller/controllerPage.js'

const routes = Router();

routes.get('/', Pages.home)
routes.get('/pedidos', Pages.pedido);
routes.get('/lancamentoprod', Pages.lancamentoprodutos);
routes.post('/novoitem', Pages.novousuario)

export default routes;