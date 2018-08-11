var express = require('express');

var app = express();

var port = process.env.PORT || 3001

app.get('/', (request, response) => {
  response.send('Hello There!');
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
