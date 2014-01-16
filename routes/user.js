
/*
 * GET users listing.
 */

var users = require('../lib/model.js').users;

exports.list = function(req, res){

   users.list(req.query.options,function (err,result) {
       res.send(result);
   })
   
};

exports.add = function  (req,res) {

    users.add(req.query.add,function  (err,result) {
        res.send(result);
    }) 
    // add user
};

exports.del = function  (req,res) {
    users.del(req.query.del,function (err,result) {
        res.send(result);
    })
};

exports.auth = function  (req,res) {
    users.auth(req.query.auth,function  (err,result) {
        res.send(result);
    })
};