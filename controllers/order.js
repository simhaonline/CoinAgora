const Account = require('../models/account');

function index(req,res){
    Account.find({}, function(err,users){
        res.render('orders/index', {
            title: 'Coin Agora',
            users,
            user: req.user
        })
    })
}