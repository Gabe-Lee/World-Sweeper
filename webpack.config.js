const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodeExternals = require('webpack-node-externals');

const serverEntry = path.resolve(__dirname, 'src/server/index.js');
const serverOutput = path.resolve(__dirname, 'dist/server');
const serverOutFile = 'server.js';

const clientEntry = path.resolve(__dirname, 'src/client/index.jsx');
const clientOutput = path.resolve(__dirname, './dist/client');
const clientOutFile = 'client.js';
const clientTitle = '[YOUR_APP_TITLE]';
const clientTemplate = path.resolve(__dirname, 'src/client/index.html');

const rebuildDelay = 1000;

const frontend = {
  watchOptions: {
    aggregateTimeout: rebuildDelay,
  },
  target: 'web',
  entry: clientEntry,
  output: {
    path: clientOutput,
    filename: clientOutFile,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: clientTitle,
      template: clientTemplate,
    }),
  ],
};

const backend = {
  watchOptions: {
    aggregateTimeout: rebuildDelay,
  },
  target: 'node',
  context: __dirname,
  node: {
    __dirname: true,
  },
  entry: serverEntry,
  output: {
    path: serverOutput,
    filename: serverOutFile,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  externals: [NodeExternals()],
};

module.exports = [frontend, backend];
