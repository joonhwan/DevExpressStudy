// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
// const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";
// const stylesHandler = "style-loader";
const stylesHandler = { loader: MiniCssExtractPlugin.loader };

const config = {
  entry: {
    site: "./Clients/site.js",
    validation: "./Clients/validation.js",
    index: "./Clients/pages/index.js",
    rating: "./Clients/pages/rating.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "wwwroot", "dist"),
  },
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
