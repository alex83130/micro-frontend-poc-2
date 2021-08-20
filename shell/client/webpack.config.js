const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');
const deps = require('./package.json').dependencies;
const dotenv = require('dotenv').config({ path: '../.env' }).parsed;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: true,
    hot: false,
    hotOnly: false,
    proxy: {
      '/api': `http://localhost:${dotenv.PORT}`,
    },
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath:
      dotenv.LOCALHOST === 'true'
        ? 'http://localhost:3000/'
        : 'https://poc-microfrontend-shell.herokuapp.com/',
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
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {
        app1: `app1@${
          dotenv.LOCALHOST === 'true'
            ? 'http://localhost:3002'
            : 'https://poc-microfrontend-app1.herokuapp.com'
        }/remoteEntry.js`,
        app2: `app2@${
          dotenv.LOCALHOST === 'true'
            ? 'http://localhost:3004'
            : 'https://poc-microfrontend-app2.herokuapp.com'
        }/remoteEntry.js`,
      },
      exposes: {
        './Shell': './src/Shell',
        './ShellLegacy': './src/ShellLegacy',
        './Service': './src/Service',
        './ListItemLink': './src/components/ListItemLink.js',
        './useAlert': './src/components/Alert/useAlert',
        './useCookie': './src/hooks/useCookie',
      },
      shared: [
        {
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
        // Workaround explaination: https://www.youtube.com/watch?v=-LNcpralkjM&t=540
        './src/Service',
        './src/hooks/useCookie',
        './src/components/Alert/useAlert',
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv),
    }),
  ],
};
