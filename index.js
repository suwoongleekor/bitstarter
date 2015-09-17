var express = require('express')
var app = express()
var fs = require('fs');

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {

    
    var buf1= fs.readFileSync('index.html');

    var buf = new Buffer("String Hello", "utf-8");
    var str = buf1.toString('utf8');
  response.send(str)

})





app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
