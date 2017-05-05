const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('../build'));
// }

app.get('/itineraries/:origin/:destination/:date/:params/:index', (req, res) => {
  const { polling, origin, destination, date, params } = req.params;
  let index = req.params.index ? `&index=${req.params.index}` : ''
  const url = `https://napi.busbud.com/x-departures/${origin}/${destination}/${date}/?${params}${index}`;

  return fetch(url, {
    method: 'get',
    headers: {
      'Accept': 'application/vnd.busbud+json; version=2; profile=https://schema.busbud.com/v2/',
      'X-Busbud-Token': 'PARTNER_JSWsVZQcS_KzxNRzGtIt1A'
    }
  })
  .then(response => {
    if (!response.ok) {
      return res.send(`something went wrong`);
    }
    return response.json()
  })
  .then(data => {
    return res.status(200).json(data);
  })
  .catch(err => {
    return res.status(500).json(err);
  })
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

module.exports = app;
