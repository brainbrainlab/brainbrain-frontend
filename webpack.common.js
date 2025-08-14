const path = require('path');
const Dotenv = require('dotenv-webpack');

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
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json'),
            transpileOnly: true,
          },
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
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets/' },
        { from: '_routes.json', to: '_routes.json' },
        { from: '_headers.json', to: '_headers.json' },
        { from: '_redirects', to: '_redirects' },
        { from: 'public/favicon.ico', to: 'favicon.ico' },
      ],
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
