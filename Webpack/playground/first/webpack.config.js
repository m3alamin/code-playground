module.exports = {
  entry: __dirname + '/custom.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            "presets": ["es2015"]
          }
        }
      }
    ]
  }
}