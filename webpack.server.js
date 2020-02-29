const path = require('path');
const nodeExternals = require('webpack-node-externals');

const ENTRY = path.resolve(__dirname, 'src', 'server', 'index.ts');
const DIST = path.resolve(__dirname, 'dist', 'server');
const NAME = 'server.js';

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
};
