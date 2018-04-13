module.exports = app => {
  app.get('/', (req, res) => {
    res.send(['simple', 'array'])
  })
}