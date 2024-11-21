import http from "http"
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"content-type" : "text/plain"})
//     res.end("Hello world")
// })


// const server = http.createServer((req, res) => {
//     if(req.method == "GET")
//     {
//         res.writeHead(200, {"content-type" : "text/plain"})
//         res.end("This is a GET request")
//     }
//     else if(req.method == "POST")
//     {
//         res.writeHead(200, {"content-type" : "text/plain"})
//         res.end("This is a POST request")
//     }
// })
const server = http.createServer((req, res) => {
    if(req.url == "/")
    {
        res.writeHead(200, {"content-type" : "text/html"}) // application/json
        res.end("<h1>Welcome to my website</h1>")
    }
    else if(req.url == "/about")
    {
        res.writeHead(200, {"content-type" : "text/html"})
        res.end("<h1>This is the about page</h1>")
    }
    else if(req.url == "/json")
    {
       res.writeHead(200, {"content-type" : "application/json"})
       res.end(JSON.stringify({name : "Shubham", age : 30}))
    }
    else
    {
        res.writeHead(404, {"content-type" : "text/html"})
        res.end("<h1>Page not found</h1>")
    }
})

server.listen(8000, () => {
    console.log("Server running on port 8000")
})

