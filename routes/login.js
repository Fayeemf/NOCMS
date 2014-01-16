// users api auth control
// 

 var user = true //require('../lib/user.js')

exports.auth = function  (req,res,next) {
    if(user/*.auth[name]*/){
        next();
    };
};