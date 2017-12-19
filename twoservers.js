var http = require("http");

var http2 = require("http");

var port = 7000;

var port2 = 7500;

function handleRequest(request, response){

	response.end("Something good");
}

function handleRequest2(request, response){

	response.end("Something sad");
}

var server = http.createServer(handleRequest);

var server2 = http2.createServer(handleRequest2);

server.listen(port, function(){
	console.log("Server listening on: http://localhost:" + port);
})

server2.listen(port2, function(){
	console.log("Server listening on: http://localhost:" + port2);
})