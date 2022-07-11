import request from 'supertest'
import app from '../app'

describe('Testing ', () => {
  it('1231', (done) => {
    void request(app).get('/testando')
      .then(resp => {
        expect(resp.body).toHaveProperty('error')
        expect(resp.statusCode).toEqual(404)
        expect(resp.body.error).toEqual('Endpoint nâo Encontrado')
        return done()
      })
  })
})
