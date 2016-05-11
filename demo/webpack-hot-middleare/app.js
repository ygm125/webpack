import {
	createReadStream
} from 'fs'

import webpack from 'webpack'

import {
	devMiddleware,
	hotMiddleware
} from 'koa-webpack-middleware'

import webpackConf from './webpack.config'

import Koa from 'koa'

const app = new Koa()

const compiler = webpack( webpackConf );

app.use( devMiddleware( compiler, {
	noInfo: false,
	publicPath: webpackConf.output.publicPath
} ) )

app.use( hotMiddleware( compiler ) );

app.use( ctx => {
	ctx.type = 'html'
	ctx.body = createReadStream( './index.html' );
} )

app.listen( 3000 );