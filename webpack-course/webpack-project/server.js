const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3050;

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config');
  const webpackMiddleware = require('webpack-dev-middleware');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  })
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));