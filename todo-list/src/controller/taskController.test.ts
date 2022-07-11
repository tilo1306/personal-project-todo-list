import { prisma } from '../database/prisma'
import request from 'supertest'
import app from '../app'
import { Itypes } from '../types/typeModel'

describe('Testing Api route register', () => {
  const email = 'tiloWolf@gmail.com'
  const password = '123456'
  beforeEach(async () => {
    await prisma.tasks.deleteMany({ where: {} })
    await prisma.users.deleteMany({ where: {} })
    await prisma.users.create({
      data: {
        email, password
      }
    })

    const user = await prisma.users.findFirst({
      where: { email }
    }) as Itypes
    await prisma.tasks.createMany(
      {
        data: [
          {
            task: 'HTML',
            userid: user.id
          },
          {
            task: 'CSS',
            userid: user.id
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
  it('testing error autheticaty', async () => {
    const user = await prisma.users.findFirst({
      where: { email }
    }) as Itypes

    const res = await request(app).get(`/task/${user.id}`)
    expect(res.statusCode).toEqual(403)
    expect(res.body.error).toEqual('Não autorizado')
  })
})
