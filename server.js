var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('views'));


app.set('port', process.env.PORT || 3000);

require('./api/employee')(app); 

app.get('/', function (request, response) {
    response.sendFile('index.html');
})

app.listen(app.get('port'), function () {
    console.log('Joohan server running on port ' + app.get('port') + "!");
})