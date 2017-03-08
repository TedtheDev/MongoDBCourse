const express = require('express');

const app = express();

// Watch for incoming requests of method get
// to the route https://localhost:3050/api
app.get('/api', (req, res) => {
  res.send({ hi: 'there' });
});

module.exports = app;
