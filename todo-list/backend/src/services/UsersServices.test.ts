/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as UsersServices from './UsersServices'
import md5 from 'md5'
import { Itypes } from '../types/typeModel'
import { prisma } from '../database/prisma'

describe('Testing user service', () => {
  const email = 'tiloWolf@gmail.com'
  const password = '123456'
  const passCripto = md5(password)

  beforeAll(async () => {
    await prisma.tasks.deleteMany({ where: {} })
    await prisma.users.deleteMany({ where: {} })
  })

  afterAll(async () => {
    await prisma.tasks.deleteMany({ where: {} })
    await prisma.users.deleteMany({ where: {} })
    await prisma.$disconnect()
  })

  it('should test create a new user empty value email', async () => {
    const newUser = await UsersServices.createUser(
      '', password) as Itypes
    expect(newUser).toBeInstanceOf(Error)
  })
  it('should test create a new user value space empty email', async () => {
    const newUser = await UsersServices.createUser('      ', password) as Itypes
    expect(newUser).toBeInstanceOf(Error)
  })
  it('should test create a new user empty value password', async () => {
    const newUser = await UsersServices.createUser(email, '') as Itypes
    expect(newUser).toBeInstanceOf(Error)
  })
  it('should test create a new user empty value password', async () => {
    const newUser = await UsersServices.createUser(email, '         ') as Itypes
    expect(newUser).toBeInstanceOf(Error)
  })

  it('should create a new user', async () => {
    const newUser = await UsersServices.createUser(email, password) as Itypes
    expect(newUser).not.toBeInstanceOf(Error)
    expect(newUser).toHaveProperty('id')
    expect(newUser).toHaveProperty('email')
    expect(newUser).toHaveProperty('password')
    expect(newUser.email).toBe(email)
    expect(newUser.password).toBe(passCripto)
  })
  it('should not allow to create a user with existing email', async () => {
    const newUser = await UsersServices.createUser(email, password) as Itypes
    expect(newUser).toBeInstanceOf(Error)
  })
  it('should not login user email empty', async () => {
    const userLogin = await UsersServices.userLogin('', password)
    expect(userLogin).toBeInstanceOf(Error)
  })
  it('should not login user email empty', async () => {
    const userLogin = await UsersServices.userLogin('   ', password)
    expect(userLogin).toBeInstanceOf(Error)
  })
  it('should not login user email empty', async () => {
    const userLogin = await UsersServices.userLogin(email, '')
    expect(userLogin).toBeInstanceOf(Error)
  })
  it('should not login user email empty', async () => {
    const userLogin = await UsersServices.userLogin(email, '         ')
    expect(userLogin).toBeInstanceOf(Error)
  })
  it('should not login user passwoord error', async () => {
    const userLogin = await UsersServices.userLogin(email, '123456789')
    expect(userLogin).toBeInstanceOf(Error)
  })
  it('should not login user email error', async () => {
    const userLogin = await UsersServices.userLogin('email@email.com', password)
    expect(userLogin).toBeInstanceOf(Error)
  })

  it('should  login user', async () => {
    const userLogin = await UsersServices.userLogin(email, password)
    expect(userLogin).not.toBeInstanceOf(Error)
  })
}
)
