const express = require('express');
const port = process.env.PORT || 8400;
const app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});
app.listen(port, console.log('listening on ' + port));
