/* eslint-disable key-spacing */
// eslint-disable-next-line no-undef

// eslint-disable-next-line no-undef
const path = require("path");
const cleanPlugin = require("clean-webpack-plugin")
// eslint-disable-next-line no-undef
module.exports = {
  mode: "development",
  // eslint-disable-next-line sort-keys
  devtool: "cheap-module-eval-source-map",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
    publicPath: "assets/scripts/"
  },
  // eslint-disable-next-line sort-keys
  devServer: {
    contentBase: "./"
  },
  plugins : [new cleanPlugin.CleanWebpackPlugin()]

};
