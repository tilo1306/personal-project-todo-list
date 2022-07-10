/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { prisma } from '../database/prisma'
import { itasks } from '../types/typeTask'
import * as TasksServices from './TasksServices'

describe('Testing task service', () => {
  const dropDatabase = async () => {
    await prisma.users.deleteMany()
  }
  beforeAll(async () => {
    await dropDatabase()
  })

  afterAll(async () => {
    await dropDatabase()
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
    const createTask = await TasksServices.createTask(
      '1', 'First tasks') as itasks
    expect(createTask).not.toBeInstanceOf(Error)
    const listTask = ['HTML', 'CSS', 'javaScript', 'Reactjs']
    for (const task of listTask) {
      void await TasksServices.createTask('1', task)
    }
  })
  it('Should test all task', async () => {
    const allTask = await TasksServices.allTasks('1') as itasks[]
    expect(allTask.length).toBeGreaterThanOrEqual(1)
  })
  it('Should test update task error', async () => {
    const allTask = await TasksServices.updateTask('1', '', 'aguardando')
    expect(allTask).toBeInstanceOf(Error)
  })

  it('Should test update task error', async () => {
    const allTask = await TasksServices.updateTask('1', 'Fist tasks', '')
    expect(allTask).toBeInstanceOf(Error)
  })

  it('Should test update task in task', async () => {
    const allTask = await TasksServices.updateTask(
      '1', 'update', 'aguardando')
    expect(allTask).not.toBeInstanceOf(Error)
  })
  it('Should test update task in task', async () => {
    const allTask = await TasksServices.updateTask(
      '1', 'update', 'complete')
    expect(allTask).not.toBeInstanceOf(Error)
  })
})
