//Grab the packages you need
var express = require('express'); //required exoress dependency
var app = express(); // assigned the app to express
var ig = require('instagram-node').instagram(); //required the instagram dependency

//COnfigure the app

//=======

//Configure instagram app with my access token
ig.use({
	//get access token here: http://instagram.pixelunion.net/
	access_token: '1304895699.1677ed0.9f6dd391b43b4a6591b6478b0ef2b8db',
})
//Tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

//Set the view engine to ejs
app.set('view engine', 'ejs');

//COnfigure instagram app with th access token


//Set the routes
//==============
app.get('/', function(req, res){

	//use the instagram package to get our popular media
	ig.user_self_media_recent(function(err, medias, pagination, remaining, limit){
		//render the home page and pass in the popular images
		res.render('pages/index', {grams:medias});
	});


});

//Start the sever
app.listen(5000);
console.log("App started on http://localhost:5000");