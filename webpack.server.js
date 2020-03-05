const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

const ENTRY = path.resolve(__dirname, 'src', 'server', 'index.ts');
const DIST = path.resolve(__dirname, 'dist');
const NAME = 'server.js';
const STATIC_SRC = path.resolve(__dirname, 'src', 'server', 'static');
const STATIC_DIST = path.resolve(__dirname, 'dist', 'static');

module.exports = {
  name: 'server',
  target: 'node',
  node: {
    __dirname: false,
  },
  context: ENTRY,
  externals: [nodeExternals()],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  entry: ENTRY,
  output: {
    filename: NAME,
    path: DIST,
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new CopyPlugin([
      { from: STATIC_SRC, to: STATIC_DIST},
    ]),
  ],
};
