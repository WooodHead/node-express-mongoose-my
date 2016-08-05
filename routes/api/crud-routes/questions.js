var express = require('express');
var Model = require('../../../models/question');
var router = express.Router();
var pick = require('./pick');

router.get('/', function (req, res, next) {
	var options = req.query || {};

	var fieldSelection = ['_id', 'word', 'pron','definition'];

	options.page = options.page ? +options.page : 1;
	options.limit = options.limit ? +options.limit : 10;
	options.select = options.select ? options.select : fieldSelection.join(' ');


	Model.paginate({}, options, function (err, result) {
		if (!err) {
			var d = {};
			d['questions'] = result.docs;
      d.meta={};
      d.meta.total=result.total;
      d.meta.limit=result.limit;
      d.meta.page=result.page;
      d.meta.pages=result.pages;
      

			res.json(d);
		} else {
      console.log(err);
    }
	});
});

module.exports = router;
