module.exports = {
  entry: './demo/demo.js',
  output: {
    path: './demo',
    filename: 'demo.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  devtool: "source-map"
};
