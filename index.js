var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
	console.log(req.query);
	var senD = '1';
	var i = req.query.i; 

	switch(i){
		case '0': 
			senD = '1';
			break;
		case '1':
			senD = '18';
			break;
		case '2':
			senD = '243';
			break;
		case '3':
			senD = '3240';
			break;
		case '4':
			senD = '43254';
			break;
		case '5':
			senD = '577368';
			break;
		case '6':
			senD = '7706988';
			break;
		case '7':
			senD = '102876480';
			break;
		case '8':
			senD = '1373243544';
			break;
		case '9':
			senD = '18330699168';
			break;
		case '10':
			senD = '244686773808';
			break;
		case '11':
			senD = '3266193870720';
			break;
		case '12':
			senD = '43598688377184';
			break;
		case '13':
			senD = '581975750199168';
			break;
		case '14':
			senD = '7768485393179328';
			break;
		case '15':
			senD = '103697388221736960';
			break;
		case '16':
			senD = '1384201395738071424';
			break;
		case '17':
			senD = '18476969736848122368';
			break;
		case '18':
			senD = '246639261965462754048';
			break;
		default:
			console.log('default');
			break;
	
	}
	

  	res.send(senD);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});