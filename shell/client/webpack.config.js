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
    port: 3000,
    historyApiFallback: true,
    hot: false,
    hotOnly: false,
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:3000/',
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
        app1: 'app1@http://localhost:3002/remoteEntry.js',
        app2: 'app2@http://localhost:3004/remoteEntry.js',
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
    new Dotenv({
      path: '../.env',
    }),
  ],
};
