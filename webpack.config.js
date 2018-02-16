const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    /**
     * Dev server configuration
     *
     */
    devServer: {
      port: 3000,
      host: '0.0.0.0',
      disableHostCheck: true,
      historyApiFallback: true,
    },

    /**
     * Watch options
     * Temporarily disabled while we find another option
     */
    // watchOptions: {
    //   poll: true,
    //   ignored: /node_modules/
    // },

    /**
     * Entry point
     *
     */
    entry: ['babel-polyfill', './src/index.jsx'],

    /**
     * Configure default extensions
     *
     */
    resolve: {
      extensions: ['.js', '.jsx'],
    },

    /**
     * Build configuration
     *
     */
    output: {
      filename: 'bundle-[hash].js',
      path: path.resolve(__dirname, 'docs'),
      publicPath: env.NODE_ENV === 'production' ? '/Test-React/' : '/',
    },

    /**
     * Module configuration
     *
     */
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
            },
          },
        },
        {
          test: /\.pcss$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { modules: true } },
            'postcss-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|gif|woff(2)?)$/,
          use: [
            'file-loader',
          ],
        },
        {
          test: /\.ico$/,
          use: [
            'file-loader?name=[name].[ext]',
          ],
        },
        {
          test: /\.scss$/,
          use: [{
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
        },
      ],
    },

    /**
     * Plugin configuration
     *
     */
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'index.html'),
      }),
    ],
  };
};
