const path = require('path')

module.exports = {
  name: 'WordChain-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // 입력
  entry: {
    app: './client.jsx',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          //   plugins: ['react-refresh/babel'],
        },
      },
    ],
  },

  // 출력
  output: {
    //  path.join(__dirname,) webpack.config.js가 있는 현재폴더를 말한다
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
}
