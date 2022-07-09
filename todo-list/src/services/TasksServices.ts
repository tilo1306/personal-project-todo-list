import { PrismaClient } from '@prisma/client'
import { itasks } from '../types/typeTask'

const prisma = new PrismaClient()

export const allTasks = async (id: string): Promise<itasks[] | Error> => {
  const tasks = await prisma.tasks.findMany({ where: { userid: Number(id) } })
  if (tasks.length >= 1) {
    return tasks
  } else {
    return new Error()
  }
}
export const createTask = async (id: string,
  task: string): Promise<itasks | Error> => {
  if (!task.trim() || task.length === 0) {
    return new Error('Campo Tarefa vazio')
  } else {
    return await prisma.tasks.create({ data: { task, userid: Number(id) } })
  }
}

export const updateTask = async (id: string,
  task: string, status: string): Promise<itasks | Error> => {
  if (task.length === 0 || !task.trim()) {
    return new Error('Campo vazio')
  } else {
    const update = await prisma.tasks.update({
      where: { id: Number(id) },
      data: { task, status }
    })
    return update
  }
}

export const del = async (id: string): Promise<itasks[] | Error> => {
  const delTask = await prisma.tasks.delete({
    where: { id: Number(id) }
  })
  if (delTask) {
    return []
  } else {
    return new Error('Task not found')
  }
}
