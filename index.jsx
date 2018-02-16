const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const compiler = webpack(require('./webpack.config')('development'));

const reactApp = express();


reactApp.use(middleware(compiler, {
  // webpack-dev-middleware options
}));

reactApp.listen(3000, () => {
  console.log('Listening to port 3000');
});
