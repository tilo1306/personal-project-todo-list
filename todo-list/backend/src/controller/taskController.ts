import { Request, Response } from 'express'
import * as TasksServices from '../services/TasksServices'

export const allTasks = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const getAllTasks = await TasksServices.allTasks(id)

  getAllTasks instanceof Error
    ? res.status(404).json([])
    : res.status(200).json(getAllTasks)
}

export const createTask = async (req: Request,
  res: Response): Promise<void> => {
  const { id } = req.params
  const { task } = req.body

  const newTask = await TasksServices.createTask(id, task)

  newTask instanceof Error
    ? res.status(400).json({ error: newTask.message })
    : res.status(200).json(newTask)
}
export const updateTask = async (req: Request,
  res: Response): Promise<void> => {
  const { id, task, status } = req.body

  const taskUpdate = await TasksServices.updateTask(id, task, status)
  taskUpdate instanceof Error
    ? res.status(400).json(
      { error: taskUpdate.message })
    : res.status(201).json(taskUpdate)
}

export const delTask = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.body
  const taskDel = await TasksServices.del(id)
  taskDel instanceof Error
    ? res.status(404).json({ error: taskDel.message })
    : res.status(204).end()
}
