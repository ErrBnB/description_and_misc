const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const db = require(__dirname + '/../db/db.js');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/db/basics', (req, res) => {
  db.getData(1, (err, results) => {
    if (err) {
      console.log(err);
      res.statusCode = 503;
      res.end(err);
    } else {
      console.log(results);
      res.statusCode = 200;
      res.end(JSON.stringify(results));
    }
  })
});

//for testing purpose
app.get('/temp', (req, res) => {
  db.getAmenities2(1, (err, results) => {
    if (err) {
      console.log(err);
      res.statusCode = 503;
      res.end(err);
    } else {
      console.log(results);
      res.statusCode = 200;
      res.end(JSON.stringify(results));
    }
  })
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
  console.log(db);
});
