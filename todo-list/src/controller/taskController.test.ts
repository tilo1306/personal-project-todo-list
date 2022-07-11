import { prisma } from '../database/prisma'
import request from 'supertest'
import app from '../app'
import { Itypes } from '../types/typeModel'

describe('Testing Api route register', () => {
  const email = 'tiloWolf@gmail.com'
  const password = '123456'
  beforeAll(async () => {
    await prisma.tasks.deleteMany({ where: {} })
    await prisma.users.deleteMany({ where: {} })
    await prisma.users.create({
      data: {
        email, password
      }
    })
  })
  afterAll(async () => {
    await prisma.tasks.deleteMany({ where: {} })
    await prisma.users.deleteMany({ where: {} })
    await prisma.$disconnect()
  })
  it('testing register router', async () => {
    const user = await prisma.users.findFirst({
      where: { email }
    }) as Itypes
    const res = await request(app).post(`/task/${user.id}`)
    expect(res.statusCode).toEqual(200)
  })
})
