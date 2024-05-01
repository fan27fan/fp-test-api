const http = require('http')
const port = 8081
const getReq = require("./methods/get-req")
const postReq = require("./methods/post-req")
let data = require("./data/data.json")
const server = http.createServer(async function (req, res) {
    req.posts = data
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    switch (req.method) {
        case 'GET': {
            getReq(req, res);
            break;
        }
        case 'POST': {
            await postReq(req, res);
            break;
        }

        default: {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.write('Server is listening on port' + port)
            res.end()
        }
    }
})
server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong', error);
    }
    else {
        console.log('Server is listening on port' + port);
    }
})



new Promise(_ => null);