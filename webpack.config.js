const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    canvas_game: './src/start_canvas.js',
    favicon_game: './src/start_favicon.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};