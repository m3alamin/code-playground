module.exports = {
    entry: __dirname + '/script.js',
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
                "presets": ["es2015"],
                "plugins": ["transform-object-rest-spread"]
              }
            }
          }
        ]
    }
}