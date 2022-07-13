import express, { Request, Response } from 'express'
import cors from 'cors'
import path from 'path'

import RouterLogin from './routes/route'

const server = express()
server.use(cors())
server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use(RouterLogin)

server.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Endpoint nâo Encontrado' })
})

export default server
