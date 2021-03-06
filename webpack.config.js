const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WebpackManifestPlugin = require("webpack-manifest-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new WebpackManifestPlugin(),
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Output Management"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
