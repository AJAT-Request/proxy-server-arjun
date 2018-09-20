const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000, () => {
  console.log('proxy server listening at port 3000');
});

app.get('/rooms/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', '/index.html'));
});
