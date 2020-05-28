const webpack = require("webpack"),
  path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: {
    bundle: path.resolve(__dirname, "youtube-client/src/components/index.tsx"),
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "youtube-client/src/index.html"),
      filename: "./index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      moment$: "moment/moment.js",
    },
  },
};

if (process.env.NODE_ENV === "production") {
  config.output = {
    filename: "index.[hash].js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  };

  config.module.rules.push({
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  });

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: "index.[hash].css",
    })
  );

  config.plugins.push(
    new CopyWebpackPlugin([
      { from: "youtube-client/src/img", to: "img" },
      {
        from: "node_modules/@fortawesome/fontawesome-free/css/all.css",
        to: "fontawesome.css",
      },
      {
        from: "node_modules/@fortawesome/fontawesome-free/webfonts",
        to: "webfonts",
      },
    ])
  );
} else {
  config.output = {
    filename: "index.[hash].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  };

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
      { loader: "sass-loader" },
    ],
  });

  config.plugins.push(
    new CopyWebpackPlugin([
      { from: "youtube-client/src/img", to: "img" },
      {
        from: "node_modules/@fortawesome/fontawesome-free/css/all.css",
        to: "fontawesome.css",
      },
      {
        from: "node_modules/@fortawesome/fontawesome-free/webfonts",
        to: "webfonts",
      },
    ])
  );

  config.devServer = {
    port: 3001,
    historyApiFallback: true,
  };
}

module.exports = config;
