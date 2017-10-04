var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')

var extractLess = new ExtractTextPlugin({ filename: '[name].css' })

module.exports = {
	context: path.resolve('./src'),
	devtool: 'eval',
	entry: { 'app': '.' },
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},
	module: {
		rules: [
			{ test: /\.tsx?/, loader: 'awesome-typescript-loader' },
			{
				test: /\.less$/,
				use: extractLess.extract({
					use: [
						{
							loader: 'css-loader',
							options: { importLoaders: 1 }
						},
						{ loader: 'postcss-loader' },
						{ loader: 'less-loader' }
					],
					fallback: 'style-loader'
				})
			},
			{ test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]' },
			{ test: /\.svg/, loader: 'url-loader' },
			{ test: /\.txt/, loader: 'string-loader' }
		]
	},
	output: {
		path: path.resolve('./build'),
		filename: '[name].js'
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		extractLess,
		new UglifyJSPlugin()
	],
	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
		modules: [
			path.resolve('./src'),
			'node_modules'
		]
	}
}
