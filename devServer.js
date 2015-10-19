
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config.dev')
var bodyParser = require('body-parser')

var app = express()
var compiler = webpack(config)

const PORT = 3300

app.use(bodyParser.json())
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}))
app.use(require('webpack-hot-middleware')(compiler))

app.get('/', (req, res) => {
  res.sendFile('main.html', {root: __dirname})
})

app.use(express.static('static'))

app.listen(PORT, 'localhost', (err) => {
  /* eslint-disable no-console */
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:' + PORT)
  /* eslint-enable no-console */
})
