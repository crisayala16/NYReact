
module.exports = {
	entry: './app/js/app.js',

	output: {
		filename: 'public/bundle.js'
	},

	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			include: /app/,
			loader: 'babel-loader',
			query: {
          		// These are the specific transformations we'll be using.
          		presets: ["react", "es2015"]
      		}
  		}]
},
devtool: 'eval-source-map',
};