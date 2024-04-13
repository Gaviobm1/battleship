const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "./src/bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|otf|ttf|eot)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(gif|jpeg|jpg|svg|png|bmp|ico|tiff|webp|avif|apng)$/i,
        type: "asset/resource",
      },
      {
      test: /\.(?:js|mjs|cjs)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Document",
      inject: "body",
    }),
  ],
  watch: true,
};
