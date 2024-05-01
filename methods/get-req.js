module.exports = function (req, res) {
    if (req.url === '/api/posts') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(req.posts.splice(0,10)));
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({title: "Not Found", message: "Not Found"}));
    }
}