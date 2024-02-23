const path = require('path');

module.exports = {
  mode: 'production', // or 'development' for development mode
  entry: './index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'index.js', // Output bundle filename
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply rule for .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader for .js files
          options: {
            presets: ['@babel/preset-env'], // Use @babel/preset-env for ES6+ compatibility
          },
        },
      },
    ],
  },
};
