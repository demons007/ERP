var app = require('express').createServer();
app.get('/',function(req,res) {
	res.write("Hello World");
	res.end();
});

app.listen(process.env.PORT || 3000,function(){
	console.log("listening on 3000");
});
