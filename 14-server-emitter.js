
const http = require('http')

const server = http.createServer()

server.on("request",(req,res)=>{
    console.log("something")
    res.end("I hear something!!!")
})

server.listen(5000,"127.0.0.1")