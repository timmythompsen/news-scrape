var mongoose = require("mongoose");

 //Local Database Configuration with Mongoose
 //mongoose.connect("mongodb://localhost/goodnews", function(error)
 	//{if(error) throw error;
 	//console.log("Database connected");
 //});

// mLab database
mongoose.connect("mongodb://admin:password@ds133876.mlab.com:33876/newsscraper", function(err) {
	if(err) throw err;
	console.log('database connected');
});