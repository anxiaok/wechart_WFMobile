"use strict"
const models = require('./db');
const express = require('express');
const router = express.Router();

function commonSaveData(req,res){
	let wechat_Schema = new models.wechat({
	    phone: req.body.phone,
	    code:req.body.code
  	});
  	wechat_Schema.save((err,data) => {
  		if (err) {
	      res.json(err);
	    } else {
	      res.json(true);
	    }
  	});
}
router.get('/',(req,res) => {
	if(req.protocol === 'https') {
        res.status(200).send('https succeed!');
    }
    else {
        res.status(200).send('http succeed!');
    }
});
router.post('/login',(req,res) => {
	models.wechat.find({phone:req.body.phone,code:req.body.code},(err,data) => {
		if(err){
			res.json(err);
		}else{
			if(data.length==0){
				commonSaveData(req,res);
			}else{
				res.json(true);
			}
		}
	});
   
});
module.exports = router;