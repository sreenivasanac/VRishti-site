const express = require('express')
const app = express()
var path = require('path');

app.use(express.static(path.join(__dirname, '/')));

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});

//assuming app is express Object.
app.get('/',function(req,res){
	res.sendFile('index.html', { root: __dirname });
});


