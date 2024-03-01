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
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, 'dist'),
  //   },
  //   host: 'localhost',
  //   port: 3000,
  //   open: true,
  //   historyApiFallback: true, // 404 페이지 대신 index.html로 이동합니다.
  //   hot: true, // 모듈 전체를 다시 로드하지 않고 변경된 사항만 갱신합니다.
  // },
}
