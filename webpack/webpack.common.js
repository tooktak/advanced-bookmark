const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const srcDir = path.join(__dirname, "..", "src");
const pageDir = path.join(srcDir, "client/page");

module.exports = {
  entry: {
    popup: path.join(pageDir, "popup.tsx"),
    options: path.join(pageDir, "options.tsx"),
    background: path.join(srcDir, "background.ts"),
    content_script: path.join(pageDir, "content_script.tsx")
  },
  output: {
    path: path.join(__dirname, "../dist/js"),
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks(chunk) {
        return chunk.name !== "background";
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:10]"
              }
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/
      }
    ]
  },
  resolve: {
    alias: {
      src: srcDir
    },
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: ".", to: "../", context: "public" }],
      options: {}
    })
  ]
};
