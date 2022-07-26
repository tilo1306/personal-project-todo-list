import { prisma } from '../database/prisma'
import { itasks } from '../types/typeTask'

export const allTasks = async (id: string): Promise<itasks[] | Error> => {
  const tasks = await prisma.tasks.findMany({
    where: { userid: Number(id) },
    orderBy: [{ id: 'asc' }]
  })
  if (tasks.length >= 1) {
    return tasks
  } else {
    return new Error()
  }
}
export const createTask = async (id: string,
  task: string): Promise<itasks | Error> => {
  if (task.length === 0 || !task.trim()) {
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
  const task = await prisma.tasks.findUnique({
    where: { id: Number(id) }
  })
  if (task) {
    await prisma.tasks.delete({
      where: { id: Number(id) }
    })
    return []
  } else {
    return new Error('Task not found')
  }
}
