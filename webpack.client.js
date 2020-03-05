const path = require('path');

const ENTRY = path.resolve(__dirname, 'src', 'client', 'index.tsx');
const DIST = path.resolve(__dirname, 'dist', 'static');
const NAME = 'client.js';

module.exports = {
  name: 'client',
  target: 'web',
  devtool: 'source-map',

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

  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  // },
};
