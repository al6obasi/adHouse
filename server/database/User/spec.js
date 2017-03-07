const app = require('../server.js')
const request = require('supertest')
const expect = require('chai').expect

describe('users', function () {

  it('Should create a new User', function (done) {
    request(app)
        .post('/api/signup')
        .send([{
              "username":"soso",
              "email":"soso@hotmai.com"
              }
              ])
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function (err, resp) {
        if (err) {
          console.log(err)
        }
        expect(resp.body).to.be.an('object')
        done()
      })
  })

  it('Should get one user', function (done) {
    request(app)
      .post('/api/:username')
      .send([{
              "username":"roro"
              }
              ])
      .set('Accept', 'application/json')
      .end(function (err, resp) {
        if (err) {
          console.log(err)
        }
        var user = resp.body
        request(app)
          .get('/api/:username' + user.username)
          .end(function (err, resp) {
            if (err) {
              throw new Error(err)
            }
            expect(resp.body.user.username).to.equal('roro')
            done()
          })
      })
      done()
  })
})