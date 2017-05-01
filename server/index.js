'use strict';

const app = require('./app');

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

const runServer = () => {
  return new Promise((resolve, reject) => {
    app.listen(PORT, HOST, (err) => {
      if (err) { console.error(err) && reject(err) }
      console.log(`App listening on ${HOST || 'localhost'}:${PORT}!`);
    });
  })
}

runServer();
