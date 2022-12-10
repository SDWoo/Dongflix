const { VueLoaderPlugin } = require('vue-loader');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '~': `${__dirname}/src`,
    },
  },
  entry: './src/main.js',
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `
                  @use "sass:color";
                  @use "sass:list";
                  @use "sass:map";
                  @use "sass:math";
                  @use "sass:meta";
                  @use "sass:selector";
                  @use "sass:string";
                `,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif|webp)/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: 'static' }],
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};