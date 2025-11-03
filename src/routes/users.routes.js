import { Router } from "express";
import {get_user,get_users,post_users,put_users,delete_users,patch_users} from './../controllers/users.controller.js'
const router = Router();
router.get('/data-users',get_users);
router.get('/data-users/:id',get_user);
router.post('/data-users',post_users);
router.delete('/data-users/:id',delete_users);
router.put('/data-users/:id',put_users);
router.patch('/data-users/:id',patch_users);

export default router;