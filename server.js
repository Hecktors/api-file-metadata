'use strict';

var express = require('express');
var cors = require('cors');
const multer = require('multer')
const upload = multer({ dest: './upload/' })

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  console.log("run index.html")
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
  const metaData = {
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  };
  console.log("file!", req.file)
  res.json(metaData);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
