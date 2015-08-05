var Family = require('../models/family');

module.exports.addFamily = function(req,res){
    var family = new Family(req.body);
    
    family.save(function(err,result){
        res.json(result);
    });
}

module.exports.getFamilies = function(req,res){
    Family.find({}, function(err,results){
        res.json(results);
    })
}