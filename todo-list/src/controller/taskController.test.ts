import { prisma } from '../database/prisma'
import request from 'supertest'
import app from '../app'

describe('Testing Api route register', () => {
  const email = 'tiloWolf@gmail.com'
  const password = '123456'
  beforeAll(async () => {
    await prisma.tasks.deleteMany({ where: {} })
    await prisma.users.deleteMany({ where: {} })
  })
})
