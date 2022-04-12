const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const srcDir = path.join(__dirname, "..", "src");
const pageDir = path.join(srcDir, "client/page");

module.exports = {
  entry: {
    Popup: path.join(pageDir, "Popup.tsx"),
    Options: path.join(pageDir, "Options.tsx"),
    Background: path.join(srcDir, "Background.ts"),
    contentScript: path.join(pageDir, "contentScript.ts"),
    AdvancedSidebar: path.join(pageDir, "AdvancedSidebar.tsx"),
  },
  output: {
    path: path.join(__dirname, "../dist/js"),
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks(chunk) {
        return chunk.name !== "background";
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:10]",
              },
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
    ],
  },
  resolve: {
    alias: {
      src: srcDir,
    },
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: ".", to: "../", context: "public" }],
      options: {},
    }),
    new ESLintPlugin({
      extensions: ["js", "mjs", "jsx", "ts", "tsx"],
    }),
  ],
};
