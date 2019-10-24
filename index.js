const express = require('express');
const functions = require('./src/functions');

const app = express();

app.get('/', (req, res)=> {
	res.send("Hello world!");
});

app.get('/lower', (req, res) => {
    return res.send(functions.lower(req.query.text));
})

app.get('/upper', (req, res) => {
    return res.send(functions.upper(req.query.text));
})

app.listen(process.env.PORT || 3000, function(err){
  if(!err) console.log("äpi listening");
});
