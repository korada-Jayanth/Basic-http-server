const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: New Request Received\n`; 
    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            console.error("Error writing to log file", err);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
            return;
        }

        if (req.url === '/') {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("HomePage");
        } else if (req.url === '/about') {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("I am Jayanth");
        } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 HTTP RESPONSE NOT FOUND");
        }
    });
});

myServer.listen(3000, () => console.log("Server Started on port 3000"));
