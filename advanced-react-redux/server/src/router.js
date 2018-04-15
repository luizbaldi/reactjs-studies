const Auth = require('./controller/auth')
const passportService = require('./services/passport')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignIn = passport.authenticate('local', { session: false })

module.exports = app => {
  app.get('/', requireAuth, (req, res) => res.send({ hi: 'there' }))
  app.post('/signup', Auth.signup)
  app.post('/signin', requireSignIn, Auth.signin)
}