var http=require('https')

https.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello World");
	response.end();
}).listen(8000);