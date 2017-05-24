module.exports = {
  entry: './test/helloTest',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  resolve: {
    // Add '.jsx', '.ts', and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      { // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader' 
      },
      { // All plain jsx files will be handled by Babel
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        enforce: 'pre', 
        test: /\.js$/, 
        loader: 'source-map-loader' 
      }
    ]
  }
};
