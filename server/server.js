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
    if (err) throw (err);
    console.log(results);
    res.statusCode = 200;
    res.end(JSON.stringify(results));
  })
});

app.get('/temp', (req, res) => {
  db.getAmenities2(1, (err, results) => {
    console.log(results);
    res.statusCode = 200;
    res.end(JSON.stringify(results));
  })
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
  console.log(db);
});
