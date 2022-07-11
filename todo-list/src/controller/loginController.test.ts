import { prisma } from '../database/prisma'
import request from 'supertest'
import app from '../app'

describe('Testing loginController register', () => {
  const email = 'tiloWolf@gmail.com'
  const password = '123456'
  beforeAll(async () => {
    await prisma.tasks.deleteMany({ where: {} })
    await prisma.users.deleteMany({ where: {} })
  })

  it('Should register a new user', (done) => {
    void request(app)
      .post('/register')
      .send(`email=${email}&password=${password}`)
      .then(res => {
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('email')
        expect(res.body).toHaveProperty('password')
        return done()
      })
  })
  it('Should registered error', (done) => {
    void request(app).post('/register')
      .send(`email=${email}&password=${password}`)
      .then(res => {
        expect(res.statusCode).toEqual(400)
        expect(res.body).toHaveProperty('error')
        expect(res.body.error).toEqual('E-mail já cadastrado ')
        return done()
      })
  })
  it('Should register user empty email field', (done) => {
    const emailEmpty = ''
    void request(app).post('/register')
      .send(`email=${emailEmpty}&password=${password}`)
      .then(res => {
        expect(res.statusCode).toEqual(400)
        expect(res.body).toHaveProperty('error')
        expect(res.body.error).toEqual('Campo E-mail vazio')
        return done()
      })
  })
  it('Should register user email field with lots of white space', (done) => {
    const emailEmpty = '            '
    void request(app).post('/register')
      .send(`email=${emailEmpty}&password=${password}`)
      .then(res => {
        expect(res.statusCode).toEqual(400)
        expect(res.body).toHaveProperty('error')
        expect(res.body.error).toEqual('Campo E-mail vazio')
        return done()
      })
  })
  it('Should register user empty password field', (done) => {
    const passwordEmpty = ''
    void request(app).post('/register')
      .send(`email=${email}&password=${passwordEmpty}`)
      .then(res => {
        expect(res.statusCode).toEqual(400)
        expect(res.body).toHaveProperty('error')
        expect(res.body.error).toEqual('Campo Password vazio')
        return done()
      })
  })
  it('Should register user password field with lots of white space',
    (done) => {
      const passwordEmpty = '            '
      void request(app).post('/register')
        .send(`email=${email}&password=${passwordEmpty}`)
        .then(res => {
          expect(res.statusCode).toEqual(400)
          expect(res.body).toHaveProperty('error')
          expect(res.body.error).toEqual('Campo Password vazio')
          return done()
        })
    })
})

describe('Should loginController login', () => {
  const email = 'tiloWolf@gmail.com'
  const password = '123456'

  afterAll(async () => {
    await prisma.tasks.deleteMany({ where: {} })
    await prisma.users.deleteMany({ where: {} })
    await prisma.$disconnect()
  })

  it('Should login user empty email field', (done) => {
    const emailEmpty = ''
    void request(app).post('/login')
      .send(`email=${emailEmpty}&password=${password}`)
      .then(res => {
        expect(res.statusCode).toEqual(400)
        expect(res.body).toHaveProperty('error')
        expect(res.body.error).toEqual('Campo e-mail vazio')
        return done()
      })
  })
  it('Should login user email field with lots of white space', (done) => {
    const emailEmpty = '            '
    void request(app).post('/login')
      .send(`email=${emailEmpty}&password=${password}`)
      .then(res => {
        expect(res.statusCode).toEqual(400)
        expect(res.body).toHaveProperty('error')
        expect(res.body.error).toEqual('Campo e-mail vazio')
        return done()
      })
  })
  it('Should login user empty email field', (done) => {
    const passwordEmpty = ''
    void request(app).post('/login')
      .send(`email=${email}&password=${passwordEmpty}`)
      .then(res => {
        expect(res.statusCode).toEqual(400)
        expect(res.body).toHaveProperty('error')
        expect(res.body.error).toEqual('Campo Password vazio')
        return done()
      })
  })
  it('Should login user password field with lots of white space', (done) => {
    const passwordEmpty = '            '
    void request(app).post('/login')
      .send(`email=${email}&password=${passwordEmpty}`)
      .then(res => {
        expect(res.statusCode).toEqual(400)
        expect(res.body).toHaveProperty('error')
        expect(res.body.error).toEqual('Campo Password vazio')
        return done()
      })
  })
  it('Should login user email invalid', (done) => {
    const emailError = 'joselitoo@gmail.com'
    void request(app).post('/login')
      .send(`email=${emailError}&password=${password}`)
      .then(res => {
        expect(res.statusCode).toEqual(400)
        expect(res.body).toHaveProperty('error')
        expect(res.body.error).toEqual('E-mail nâo cadastrado')
        return done()
      })
  })
  it('Should login correct', (done) => {
    void request(app).post('/login')
      .send(`email=${email}&password=${password}`)
      .then(res => {
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('email')
        expect(res.body).toHaveProperty('itoken')
        return done()
      })
  })
})
