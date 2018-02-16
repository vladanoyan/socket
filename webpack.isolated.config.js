const mainConfig = require('./webpack.config');

// change entry point
mainConfig.entry = './isolated/index.jsx';

// change dev server port
mainConfig.devServer.port = 8000;

module.exports = mainConfig;
