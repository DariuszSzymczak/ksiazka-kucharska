var express = require("express");
var app = express();
var db = require("./database.js");
var cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Server port
var HTTP_PORT = 8000;


app.post("/api/produkty", (req, res) => {
  let filter = req.body.filter;
  let sql = `select * from produkty where nazwa LIKE '${filter}%' `;
  let params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    console.log(rows)
    res.send(JSON.stringify(rows));
  });
});

app.post('/api/przepisy', function(req, res) {
  const id = req.body.id;
  var sql = `select * from przepisy where id in (select przepisId from polaczenia where produktId =${id} )`;
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  }); 
});

app.post('/api/filter', function(req, res) {
  const id = req.body.id;
  var sql = `select przepisId from polaczenia where produktId =${id}`;
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  }); 
});


app.post('/api/detail', function(req, res) {
  const id = req.body.id;
  var sql = `select *  from polaczenia  left join produkty on polaczenia.produktId = produkty.id where przepisId = ${id} `;
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  }); 
});


// Default response for any other request
app.use(function (req, res) {
  res.status(404);
});


// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});