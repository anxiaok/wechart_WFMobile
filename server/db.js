const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WF_wechat',{useNewUrlParser:true});
const db = mongoose.connection;
db.once('error',() => console.log('error'));
db.once('open',() => console.log('successed'));

const wechat_Schema = new mongoose.Schema({
	phone:Number,
	code:String
});

const Models = {
	wechat_Schema:wechat_Schema,
	wechat:mongoose.model('wechat',wechat_Schema)
};

module.exports = Models;