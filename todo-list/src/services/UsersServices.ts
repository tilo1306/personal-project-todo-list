// import JWT from 'jsonwebtoken'
import md5 from 'md5'
import { PrismaClient } from '@prisma/client'
import { Itypes } from '../types/typeModel'

const prisma = new PrismaClient()

export const createUser = async (email: string, password: string): Promise<Itypes | Error> => {
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
