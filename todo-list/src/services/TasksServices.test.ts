/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { prisma } from '../database/prisma'
import { itasks } from '../types/typeTask'
import * as TasksServices from './TasksServices'

describe('Testing task service', () => {
  beforeAll(async () => {
    await prisma.tasks.deleteMany({ where: {} })
    await prisma.users.deleteMany({ where: {} })
    await prisma.users.createMany(
      {
        data: [
          {
            email: 'joselito@semnocao.com',
            password: '123465'
          },
          {
            email: 'borsa@minigameiro.com',
            password: '123465'
          }
        ]
      }

    )
  })

  afterAll(async () => {
    await prisma.tasks.deleteMany({ where: {} })
    await prisma.users.deleteMany({ where: {} })
    await prisma.$disconnect()
  })

  it('Should test list task error', async () => {
    const allTask = await TasksServices.allTasks('1') as itasks[]
    expect(allTask).toBeInstanceOf(Error)
  })
  it('should test create task error', async () => {
    const createTask = await TasksServices.createTask('1', '') as itasks
    expect(createTask).toBeInstanceOf(Error)
  })
  it('should test create task error', async () => {
    const createTask = await TasksServices.createTask(
      '1', '       ') as itasks
    expect(createTask).toBeInstanceOf(Error)
  })
  it('should test create task', async () => {
    const user = await prisma.users.findFirst({
      where: {
        email: 'joselito@semnocao.com'
      }
    })
    if (user) {
      const createTask = await TasksServices.createTask(
        user.id.toString(), 'First tasks') as itasks
      expect(createTask).not.toBeInstanceOf(Error)
      const listTask = ['HTML', 'CSS', 'javaScript', 'Reactjs']
      for (const task of listTask) {
        void await TasksServices.createTask(user.id.toString(), task)
      }
    }
  })
  it('Should test all task', async () => {
    const user = await prisma.users.findFirst({
      where: {
        email: 'joselito@semnocao.com'
      }
    })
    if (user) {
      const allTask = await TasksServices.allTasks(
        user.id.toString()) as itasks[]
      expect(allTask.length).toBeGreaterThanOrEqual(1)
    }
  })
  it('Should test update task error', async () => {
    const allTask = await TasksServices.updateTask('1', '', 'aguardando')
    expect(allTask).toBeInstanceOf(Error)
  })
  it('Should test update task error', async () => {
    const allTask = await TasksServices.updateTask('1', '     ', 'aguardando')
    expect(allTask).toBeInstanceOf(Error)
  })

  it('Should test update task in task', async () => {
    const task = await prisma.tasks.findFirst({
      where: {
        task: 'HTML'
      }
    })
    if (task) {
      const allTask = await TasksServices.updateTask(
        task.id.toString(), 'update', 'aguardando')
      expect(allTask).not.toBeInstanceOf(Error)
    }
  })
  it('Should test del task', async () => {
    const task = await prisma.tasks.findFirst({
      where: {
        task: 'HTML'
      }
    })
    if (task) {
      const delTask = await TasksServices.del(
        task.id.toString())
      expect(delTask).not.toBeInstanceOf(Error)
      expect(delTask).toBe([])
    }
  })

  it('Should test del task', async () => {
    const id = '9999'
    const delTask = await TasksServices.del(
      id)
    expect(delTask).toBeInstanceOf(Error)
  })
})
