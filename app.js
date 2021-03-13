var fs = require('fs');
var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
var serve = serveStatic("./");

var errorus = 0;

var server = http.createServer(function(req, res) {
	var lowerUrl = req.url.toLowerCase(); 

	switch(lowerUrl) {
		case '':
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);

		break;

		case '/o':
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/about.html').pipe(res);

		break;

		case '/img/gallery/graduation':
		res.writeHead(200, {'Content-Type': 'image/jpeg'});
		fs.createReadStream(__dirname + '/img/gallery/graduation.jpg').pipe(res);

		break;

		case '/img/gallery/study':
		res.writeHead(200, {'Content-Type': 'image/jpeg'});
		fs.createReadStream(__dirname + '/img/gallery/study.jpg').pipe(res);
	
		break;

		case '/video/students/memes':
		res.writeHead(200, {'Content-Type': 'video/mp4'});
		fs.createReadStream(__dirname + '/video/students/memes.mp4').pipe(res);
	
		break;

		default:
		errorus = 404;

	}

		var done = finalhandler(req, res);
  		serve(req, res, done);
});



server.listen(3000, '127.0.0.1');