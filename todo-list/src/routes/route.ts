import { Router } from 'express'

import * as LoginController from '../controller/loginController'

const router = Router()

router.post('/register', LoginController.userCreate)
router.post('/login', LoginController.userLogin)
router.get('/task/:id')
router.post('/task/:id')
router.put('/task/:id')
router.delete('task/:id')

export default router
