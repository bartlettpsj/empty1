const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const devMode = process.env.NODE_ENV !== 'production'; // might use in future

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'EntryPoint'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/index.bundled.html`,
      inject: 'body'
    }),
    new MiniCssExtractPlugin({filename: '[name].css', chunkFilename: "[id].css"})
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: { presets: ["es2015"] }
        }
      },
      {
        test: /\.*css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader", 'sass-loader'
        ]
      }
    ]
  }
};