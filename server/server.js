var express = require('express');
var app = express();
const port = process.env.PORT || 3001;

app.get('/', (request, response) => {
  response.sendFile('index.html', { 'root': 'static' });
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
