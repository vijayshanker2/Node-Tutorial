const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        const {method,url} = req
        console.log(method)
        res.end('Welcome to out home page !!')
    }
    else if(req.url == '/about'){
        res.end('Welcome to about page !!')
    }
    else{
        res.end(`
            <h1>Oops</h1>
            <p>We can find the page you can looking for</p>
            <a href='/'>Back Home</a>
        `)
    }
})

server.listen(5000)