const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const login = require('./login')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const input = req.body
  const enter = login(input)
  if (enter === 0) {
    let warning = "Username / Password 錯誤"
    res.render('index', { warning })
  } else {
    res.render('welcome', { enter })
  }
})

app.listen(port, () => {
  console.log(`express is listening on localhost:${port}`)
})