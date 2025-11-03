import { Router } from "express";
import {get_pedidos,get_pedido,post_pedidos,put_pedidos,delete_pedidos,patch_pedidos} from './../controllers/pedidos.controller.js';

const router = Router();

router.get('/pedidos',get_pedidos);
router.get('/pedidos/:id',get_pedido);
router.post('/pedidos',post_pedidos);
router.delete('/pedidos/:id',delete_pedidos);
router.put('/pedidos/:id',put_pedidos);
router.patch('/pedidos/:id',patch_pedidos);


export default router;