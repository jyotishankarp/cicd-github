const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to handle a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/test', (req, res) => {
  res.send('Hello, test');
});

// Listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
