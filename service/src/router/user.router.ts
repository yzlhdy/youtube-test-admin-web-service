import { Router } from 'express'
import { UserController } from '../controller'

const usercontroller = new UserController();
const router: Router = Router();

router.post('/api/register', usercontroller.register)
router.post('/api/login', usercontroller.login)
router.get('/api', usercontroller.hello)

export default router