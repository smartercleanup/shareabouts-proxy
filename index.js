var http = require('http')
var httpProxy = require('http-proxy')
var proxy = httpProxy.createProxyServer({})
var corsify = require('corsify')
var config = require('./config')

var cors = corsify({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization'
})

var server = http.createServer(cors(function (req, res) {
  proxy.web(req, res, { target: config.host })
}))

server.on('error', function (err) {
  console.log('\n\n\nERRORRRRRRR')
  console.log(err)
  console.log('ERRORRRRRRR\n\n\n')
})

server.listen(4242)
