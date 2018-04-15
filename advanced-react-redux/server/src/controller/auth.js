const User = require('../models/user')
const jwt = require('jwt-simple')
const config = require('../config')

const tokenForUser = ({ id }) => jwt.encode({ sub: id, iat: new Date().getTime() }, config.secret)

exports.signup = (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(422).send({
      error: 'You must fill email and password'
    })
  }

  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err)
    }

    if (existingUser) {
      return res.status(422).send({ error: 'Email alreay in use' })
    }

    const user = new User({ email, password })

    user.save(err => {
      if (err) return next(err)

      res.json({ token: tokenForUser(user) })
    })
  })
}

exports.signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user)} )
}