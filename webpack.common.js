const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|mp3|webp|ico)$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /component/,
            use: ['@svgr/webpack'],
          },
          {
            type: 'asset/resource',
          },
        ],
      },
      {
        test: /\.glsl$/,
        type: 'asset/source',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets/' },
        { from: '_routes.json', to: '_routes.json' },
        { from: '_headers.json', to: '_headers.json' },
        { from: '_redirects', to: '_redirects' },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
