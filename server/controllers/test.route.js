import {Router} from 'express';
import {hello} from './test.controller.js'

const router = Router();

router.get('/', hello);

export default router;