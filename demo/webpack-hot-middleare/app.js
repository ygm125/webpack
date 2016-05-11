require( "babel-polyfill" );

var fs = require( 'fs' )
var webpack = require( 'webpack' )

var webpackMiddleware = require( 'koa-webpack-middleware' );
var devMiddleware = webpackMiddleware.devMiddleware;
var hotMiddleware = webpackMiddleware.hotMiddleware

var webpackConf = require( './webpack.config' )

var Koa = require( 'koa' )

var app = new Koa()

var compiler = webpack( webpackConf );

app.use( devMiddleware( compiler, {
	noInfo: false,
	publicPath: webpackConf.output.publicPath
} ) )

app.use( hotMiddleware( compiler ) );

app.use( ctx => {
	ctx.type = 'html'
	ctx.body = fs.createReadStream( './index.html' );
} )

app.listen( 3000 );