const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');
const deps = require('./package.json').dependencies;
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3004,
    historyApiFallback: true,
    hot: false,
    hotOnly: false,
    proxy: {
      '/api': 'http://localhost:3005',
    },
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'auto',
    chunkFilename: '[id].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      remotes: {
        shell: 'shell@https://poc-microfrontend-shell.herokuapp.com/remoteEntry.js',
      },
      exposes: {
        './routes': './src/routes',
        './Navigation': './src/Navigation',
      },
      shared: {
        ...deps,
        react: {
          eager: true,
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          eager: true,
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv({
      path: '../.env',
    }),
  ],
};
