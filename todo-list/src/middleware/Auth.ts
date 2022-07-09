import { Request, Response, NextFunction } from 'express'
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const Auth = {
  private: async (req: Request, res: Response, next: NextFunction) => {
    let success = false
    if (req.headers.authorization) {
      const [authType, token] = req.headers.authorization.split(' ')
      if (authType === 'Bearer') {
        try {
          JWT.verify(
            token, process.env.JWT_SECRET_KEY as string
          )
          success = true
        } catch (err) {

        }
      }
    }
    if (success) {
      next()
    } else {
      res.status(403).json({ error: 'Não autorizado' })
    }
  }

}
