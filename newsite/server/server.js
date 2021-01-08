var express = require('express');
const path = require('path');
const http = require('http');

var app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public', { extensions: ['html'] }));

app.use(function (req, res, next) {
	res.status(404);

	// respond with html pa

	// default to plain-text. send()
	res.type('txt').send('Not found');
});

const server = http.createServer(app);


server.listen(port);
console.log(`Started server on port ${port}`);