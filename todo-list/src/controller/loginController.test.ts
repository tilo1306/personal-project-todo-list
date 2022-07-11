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

  it('testing register router', async () => {
    const res = await request(app).post('/register')
      .send(`email=${email}&password=${password}`)
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('id')
    expect(res.body).toHaveProperty('email')
    expect(res.body).toHaveProperty('password')
  })
  it('testing the registration email already registered error', async () => {
    const res = await request(app).post('/register')
      .send(`email=${email}&password=${password}`)
    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('error')
    expect(res.body.error).toEqual('E-mail já cadastrado ')
  })
  it('testing register user empty email field', async () => {
    const emailEmpty = ''
    const res = await request(app).post('/register')
      .send(`email=${emailEmpty}&password=${password}`)
    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('error')
    expect(res.body.error).toEqual('Campo E-mail vazio')
  })
  it('testing register user email field with lots of white space', async () => {
    const emailEmpty = '            '
    const res = await request(app).post('/register')
      .send(`email=${emailEmpty}&password=${password}`)
    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('error')
    expect(res.body.error).toEqual('Campo E-mail vazio')
  })
  it('testing register user empty password field', async () => {
    const passwordEmpty = ''
    const res = await request(app).post('/register')
      .send(`email=${email}&password=${passwordEmpty}`)
    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('error')
    expect(res.body.error).toEqual('Campo Password vazio')
  })
  it('testing register user password field with lots of white space',
    async () => {
      const passwordEmpty = '            '
      const res = await request(app).post('/register')
        .send(`email=${email}&password=${passwordEmpty}`)
      expect(res.statusCode).toEqual(400)
      expect(res.body).toHaveProperty('error')
      expect(res.body.error).toEqual('Campo Password vazio')
    })
})

describe('Testing Api route login', () => {
  const email = 'tiloWolf@gmail.com'
  const password = '123456'

  afterAll(async () => {
    await prisma.tasks.deleteMany({ where: {} })
    await prisma.users.deleteMany({ where: {} })
    await prisma.$disconnect()
  })

  it('testing login user empty email field', async () => {
    const emailEmpty = ''
    const res = await request(app).post('/login')
      .send(`email=${emailEmpty}&password=${password}`)
    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('error')
    expect(res.body.error).toEqual('Campo e-mail vazio')
  })
  it('testing login user email field with lots of white space', async () => {
    const emailEmpty = '            '
    const res = await request(app).post('/login')
      .send(`email=${emailEmpty}&password=${password}`)
    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('error')
    expect(res.body.error).toEqual('Campo e-mail vazio')
  })
  it('testing login user empty email field', async () => {
    const passwordEmpty = ''
    const res = await request(app).post('/login')
      .send(`email=${email}&password=${passwordEmpty}`)
    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('error')
    expect(res.body.error).toEqual('Campo Password vazio')
  })
  it('testing login user password field with lots of white space', async () => {
    const passwordEmpty = '            '
    const res = await request(app).post('/login')
      .send(`email=${email}&password=${passwordEmpty}`)
    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('error')
    expect(res.body.error).toEqual('Campo Password vazio')
  })
  it('testing login user email invalid', async () => {
    const emailError = 'joselitoo@gmail.com'
    const res = await request(app).post('/login')
      .send(`email=${emailError}&password=${password}`)
    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('error')
    expect(res.body.error).toEqual('E-mail nâo cadastrado')
  })
  it('testing', async () => {
    const res = await request(app).post('/login')
      .send(`email=${email}&password=${password}`)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('id')
    expect(res.body).toHaveProperty('email')
    expect(res.body).toHaveProperty('itoken')
  })
})
