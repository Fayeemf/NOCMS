var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/little');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("db open");
});


var trade = mongoose.Schema({
    id:String,
    name: String,
    products:Array,
    trdDate:Date,
    payDate:Date,
    status:String
});


var product = mongoose.Schema({
    pid:String,
    status:String,
    addDate:Date,
    picUrl:Array,
    property:{
        name:String,
        cate:String,
        brand:String,
        size:Array,
        mat:String,
        color:String
    },
    price:String,
    amount:Number,
    desc:String,


   
});

var user = mongoose.Schema({
    name:String,
    pass:String,
    auth:{}
});

var buser = mongoose.Schema({
    name:String,
    pass:String
});

exports.trade = mongoose.model('trade',trade);
exports.product = mongoose.model('product',product);
exports.user = mongoose.model('user',user);

