var path = require( "path" );
var webpack = require( 'webpack' );

module.exports = {
	entry: {
		app: [ "webpack-hot-middleware/client?reload=1", "./src/main.js" ]
	},
	output: {
		path: path.resolve( __dirname, 'dist' ),
		publicPath: "/assets/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
    	]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};