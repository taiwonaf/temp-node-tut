const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.sendDate('Welcoem to our home page')
    } 
    console.log(req)
    res.write('Welcome to our home page')
    res.end();
});

server.listen(5000);