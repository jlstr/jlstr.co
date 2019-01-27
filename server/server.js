var express = require('express');
var app = express();
const port = process.env.PORT || 3001;

// Using MiddleWare
app.use('/fonts', express.static('fonts'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/templates', express.static('templates'));
app.use('/images', express.static('images'));
// Favicon
app.use('/favicon.ico', express.static('images/favicon.ico'));

app.get('/', (request, response) => {
  response.sendFile('index.html', { 'root': 'static' });
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
