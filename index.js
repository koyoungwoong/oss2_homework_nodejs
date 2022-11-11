const express = require('express');
const app = express();

app.listen(8080, function() {
    console.log('listening on 8080')
})

app.get('/', function(req, res) { 
  res.sendFile(__dirname +'/index.html')
  })

app.get('/home', function(req, res) { 
    res.sendFile(__dirname +'/home.html')
  })
app.get('/link', function(req, res) { 
    res.sendFile(__dirname +'/link.html')
  })  
app.get('/fruit', function(req, res) { 
    res.sendFile(__dirname +'/fruit.html')
  })
app.get('/animal', function(req, res) { 
    res.sendFile(__dirname +'/animal.html')
  })  
app.get('/hallym', function(req, res) { 
    res.sendFile(__dirname +'/hallym.html')
  })  
app.get('/animal-c', function(req, res) { 
    res.sendFile(__dirname +'/animal-c.html')
  })    
