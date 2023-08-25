import {Router} from 'express';
import controller from '../controller/controller';
const router = Router()

router.post('/Item/add', controller.addItem);
router.get('/Item/get', controller.getItem);
router.patch('/Item/update', controller.updateItem);
router.delete('/Item/delete', controller.removeItem);


export default router;