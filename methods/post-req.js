const reqBodyParser = require("../utils/body-parser");
const fs = require('fs');

module.exports = async function (req, res) {
    if (req.url === '/api/posts') {
        try {
            let body = await reqBodyParser(req);
            fs.writeFileSync('./data/moderated-posts.json', JSON.stringify(body))
            res.writeHead(201, {'Content-Type': 'application/json'});
            res.end();
        } catch (err) {
            console.log(err);
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({title: "Failed", message: "Failed"}));
        }
    }
}