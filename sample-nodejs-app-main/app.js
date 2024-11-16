const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

const PORT = process.env.PORT;
if (!PORT) {
    throw new Error('PORT environment variable is not set');
}
module.exports.listen = function listen() {
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports.close = function listen() {
    server.close()
}
