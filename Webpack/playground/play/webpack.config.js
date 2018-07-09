const webpack = require('webpack');
const path = require('path');

const config = {
     entry: './src/script.js',
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'bundle.js'
     },
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	},
     devtool: 'source-map'
 };

module.exports = config;