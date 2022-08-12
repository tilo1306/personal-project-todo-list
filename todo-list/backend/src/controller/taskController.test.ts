import { prisma } from '../database/prisma'
import request from 'supertest'
import app from '../app'
import JWT from 'jsonwebtoken'
import md5 from 'md5'

describe('Should Api route register', () => {
  const email = 'tiloWolf@gmail.com'
  const password = '123456'
  const passCripto = md5(password)

  const token = JWT.sign(
    { id: '999', email, password: passCripto },
    process.env.JWT_SECRET_KEY as string,
    { expiresIn: '2h' }
  )
  beforeEach(async () => {
    await prisma.tasks.deleteMany({ where: {} })
    await prisma.users.deleteMany({ where: {} })
    await prisma.users.create({
      data: {
        id: 999, email, password
      }
    })

    await prisma.tasks.createMany(
      {
        data: [
          {
            id: 998,
            task: 'HTML',
            userid: 999
          },
          {
            id: 999,
            task: 'CSS',
            userid: 999
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

  it('Should error autheticaty', (done) => {
    void request(app).get('/task/999')
      .then(res => {
        expect(res.statusCode).toEqual(403)
        expect(res.body.error).toEqual('Não autorizado')
        return done()
      })
  })
  it('testing autheticaty and all tasks', (done) => {
    void request(app)
      .get('/task/999')
      .set('Authorization', `Bearer ${token}`)
      .then(res => {
        expect(res.statusCode).toEqual(200)
        expect(res.body.error).toBeUndefined()
        expect(res.body.length).toBeGreaterThanOrEqual(1)
        expect(res.body[0]).toHaveProperty('id')
        expect(res.body[0]).toHaveProperty('task')
        expect(res.body[0]).toHaveProperty('status')
        expect(res.body[0]).toHaveProperty('userid')
        return done()
      })
  })
  it('testing autheticaty and fail error tasks', (done) => {
    void request(app)
      .get('/task/998')
      .set('Authorization', `Bearer ${token}`)
      .then(res => {
        expect(res.statusCode).toEqual(404)
        expect(res.body.error).toBeUndefined()
        expect(res.body).toEqual(expect.any(Array))
        return done()
      })
  })
  it('Should autheticaty create task', (done) => {
    void request(app).post('/task/999')
      .set('Authorization', `Bearer ${token}`)
      .send({ task: 'new tasks' })
      .then(res => {
        expect(res.statusCode).toEqual(200)
        return done()
      })
  })
  it('Should autheticaty error create task', (done) => {
    void request(app).post('/task/999')
      .set('Authorization', `Bearer ${token}`)
      .send({ task: '' })
      .then(res => {
        expect(res.statusCode).toEqual(400)
        expect(res.body.error).toEqual('Campo Tarefa vazio')
        return done()
      })
  })
  it('testing autheticaty and update tasks', (done) => {
    void request(app)
      .put('/task/998')
      .set('Authorization', `Bearer ${token}`)
      .send({ id: 999, task: 'update', status: 'aguardando' })
      .then(res => {
        expect(res.statusCode).toEqual(201)
        return done()
      })
  })
  it('testing autheticaty and update error tasks', (done) => {
    void request(app)
      .put('/task/998')
      .set('Authorization', `Bearer ${token}`)
      .send({ task: '', status: 'aguardando' })
      .then(res => {
        expect(res.statusCode).toEqual(400)
        expect(res.body.error).toEqual('Campo vazio')
        return done()
      })
  })
  it('testing autheticaty and delete tasks', (done) => {
    void request(app)
      .delete('/task/998')
      .set('Authorization', `Bearer ${token}`)
      .send({ id: 999 })
      .then(res => {
        expect(res.statusCode).toEqual(204)
        return done()
      })
  })
  it('testing autheticaty and delete error tasks', (done) => {
    void request(app)
      .delete('/task/998')
      .set('Authorization', `Bearer ${token}`)
      .send({ id: 99999 })
      .then(res => {
        expect(res.statusCode).toEqual(404)
        expect(res.body.error).toEqual('Task not found')
        return done()
      })
  })
})
