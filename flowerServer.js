var http = require('http');

// var fs = require('fs');
// var index = fs.readFileSync('flower.html');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end(index);
// }).listen(3333);

var http=require("http");
var fs=require('fs');
var server=function(req,res){

  	res.writeHead(200,{'Content-Type': 'text/html'});
	var loadPage=req.url;
	(loadPage=="/") && (loadPage="/flower.html");
	fs.readFile("."+loadPage, function (err, data) {
 		if (err){
 			//res.writeHead(404);
 			res.end("File Not Found");
 			//console.log(err);
 		}
 		res.end(data);
	});
}
http.createServer(server).listen(3333);		