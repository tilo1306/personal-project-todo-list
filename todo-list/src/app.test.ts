import request from 'supertest'
import app from './app'

describe('Testing Api route register', () => {
  it('testing status error 404', async () => {
    const res = await request(app).get('/test')
    expect(res.body).toHaveProperty('error')
    expect(res.statusCode).toEqual(404)
    expect(res.body.error).toEqual('Endpoint nâo Encontrado')
  })
})
