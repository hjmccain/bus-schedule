const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/itineraries/:depart/:arrive/:date/:params', (req, res) => {
  const { polling } = req.params;
  const depart = 'dr5reg';
  const arrive = 'f25dvk';
  const date = '2017-04-30';
  const params = 'adult=1&currency=CAD';
  const url = `https://napi.busbud.com/x-departures/${depart}/${arrive}/${date}/?${params}`;

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

module.exports = app;
