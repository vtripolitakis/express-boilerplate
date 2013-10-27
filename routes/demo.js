
/*
 * GET users listing.
 */

var mongoose = require('mongoose');
var User  = require ('../models/user');



exports.saveFunc  = function(req, res){

	var rname=req.param('name');
	var rsurname=req.param('surname');
	var rage=req.param('age');

	var vag = new User({name:rname , surname:rsurname,age: rage});
	vag.save();
	//add error handling code here
  	res.send("user saved");

};

