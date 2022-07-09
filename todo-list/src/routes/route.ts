import { Router } from 'express'

import * as LoginController from '../controller/loginController'
import * as TasksController from '../controller/taskController'
import { Auth } from '../middleware/Auth'

const router = Router()

router.post('/register', LoginController.userCreate)
router.post('/login', LoginController.userLogin)
router.get('/task/:id', Auth.private, TasksController.allTasks)
router.post('/task/:id', Auth.private, TasksController.createTask)
router.put('/task/:id', Auth.private, TasksController.updateTask)
router.delete('/task/:id', Auth.private, TasksController.delTask)

export default router
