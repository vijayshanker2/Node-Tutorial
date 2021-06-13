
const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    const filestream = fs.createReadStream('./content/subfolder/big.txt', 'utf-8')
    filestream.pipe(res)

    // const file = fs.readFileSync('./content/subfolder/big.txt','utf-8')
    // res.end(file)
})

server.listen(5000)
