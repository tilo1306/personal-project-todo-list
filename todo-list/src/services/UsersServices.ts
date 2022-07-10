import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'
import md5 from 'md5'
import { prisma } from '../database/prisma'
import { Itypes } from '../types/typeModel'

dotenv.config()

interface Tlogin {
  id: number
  email: string
  itoken: string
}

export const createUser = async (email: string,
  password: string): Promise<Itypes | Error> => {
  if (email.length === 0 || !email.trim()) {
    return new Error('Campo E-mail vazio')
  }

  if (password.length === 0 || !password.trim()) {
    return new Error('Campo Password vazio')
  }

  const checkEmail = await prisma.users.findFirst({
    where: { email }
  })

  if (checkEmail) {
    return new Error('E-mail já cadastrado ')
  }

  const passCripto = md5(password)

  return await prisma.users.create({ data: { email, password: passCripto } })
}

export const userLogin = async (email: string,
  password: string): Promise<Tlogin | Error> => {
  if (email.length === 0 || !email.trim()) {
    return new Error('Campo e-mail vazio')
  }
  if (password.length === 0 || !password.trim()) {
    return new Error('Campo Password vazio')
  }
  const passCripto = md5(password)

  const login = await prisma.users.findFirst({
    where: {
      email
    }
  })
  if (login) {
    if (login.password === passCripto) {
      const token = JWT.sign(
        { id: login.id, email: login.email, password: passCripto },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: '2h' }
      )
      return { id: login.id, email: login.email, itoken: token }
    } else {
      return new Error('password invalido')
    }
  } else {
    return new Error('E-mail nâo cadastrado')
  }
}
