const Account = require('../models/account');

module.exports= {
    index
   
}

function index(req,res){
    Account.find({}, function(err,users){
        res.render('account/index', {
            title: 'Coin Agora',
            users,
            user: req.user
        })
    })
}