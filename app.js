var http = require('http');
var fs=require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  fs.readFile('./api1.html',null,function(error,data){
  	if(error){
  		res.writeHead(404);
  		res.write('File not found');
  	}	else{
  		res.write(data);
  	}
  });
}).listen(3000); 