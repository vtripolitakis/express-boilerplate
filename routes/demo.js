
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

exports.searchFunc = function(req,res){
	var out='';
	var rname=req.param('name');
	User.findOne({name:rname}, function(err,user)
	{
	if (user!=null)
	{
		out=out+user.name+" "+user.surname+": "+user.age;
	}
	else
	{
		out="nothing found :-(";
	}
		res.send(out);
	});
};

