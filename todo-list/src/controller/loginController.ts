import { Request, Response } from 'express'
import * as UsersServices from '../services/UsersServices'

export const userCreate = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body
  const newUser = await UsersServices.createUser(email, password)

  newUser instanceof Error
    ? res.status(400).json({ error: newUser.message })
    : res.status(201).json(newUser)
}
