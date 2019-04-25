
const http = require('http')
const port = process.env.NODE_PORT || 3000
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' })
    res.end('Hello world!')
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
