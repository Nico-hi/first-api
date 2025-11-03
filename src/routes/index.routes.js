import { Router } from "express";
import {index_controller} from './../controllers/index.controller.js';
const router = Router();

router.get('/conection',index_controller)

export default router