var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({
  dest: './public/graph',
  rename: function(fieldname, filename){
    console.log('hahaha');
    return 'graph';
  },
  onFileUploadStart: function(file){
    console.log(file.originalname+ ' is starting ...');
  },
  onFileUploadComplete: function(file){
    console.log(file.fieldname + ' uploaded to '+file.path);
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/bar', function(req, res, next) {
  res.render('bar');
});

router.get('/graph', function(req, res, next){
  res.render('graph');
});

router.post('/upload/graph',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

module.exports = router;
