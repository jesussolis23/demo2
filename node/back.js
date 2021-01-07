/*
const express = require('express');
var app = express();
app.use(express.static('client'));


const http = require('http');
const hostname = '127.1.0.1';
const port = "3030";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Servidor creado. ');
});

server.listen(port, hostname, () => {
  console.log("Servidor corriendo. ");
});


var mysql = require('mysql');
const conection = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: '',
  database: 'notebloc'
});

conection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  /*
  conection.query("CREATE DATABASE notebloc", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });


  var sql = "CREATE TABLE users (mail VARCHAR(255) primary key not null, contrasena VARCHAR(255) not null)";
  conection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created users");
  });
  

  var sql = "CREATE TABLE notes (mail varchar(255) not null, titulo varchar(60) not null, etiqueta varchar(60), contenido varchar(255) not null)";
  conection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created notes");
  });

});

*/
