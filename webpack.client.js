const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const ENTRY = path.resolve(__dirname, 'src', 'client', 'index.tsx');
const HTML = path.resolve(__dirname, 'src', 'client', 'index.html');
const DIST = path.resolve(__dirname, 'dist', 'client');
const NAME = 'client.js';

module.exports = {
  name: 'client',
  target: 'web',
  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: HTML,
    }),
  ],
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

  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  // },
};
