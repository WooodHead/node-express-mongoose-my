var express = require('express');
var router = express.Router();
var Model=require('../models/question');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

/*
router.get('/questions',function(req,res,next){
    var options=req.query||{};
    options.page=options.page?+options.page:1;
    options.limit=options.limit?+options.limit:10;
    
    Model.paginate({},options,function(err, result){
      if(!err){
        var d={};
        d.questions=result.docs;
//        d.meta=pick();
        res.json();
      }else{
        
      }
    });
});

*/
module.exports = router;
