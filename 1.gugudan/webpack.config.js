const path = require('path') // node깔면 딸려오는 애
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  name: 'GuGuDan',
  mode: 'development',
  devtool: 'inline-source-map', // hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: './client',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          // presets: ['@babel/preset-env', '@babel/preset-react'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 1% in KR'], // browserslist
                },
                debug: true,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: ['react-refresh/babel'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new ReactRefreshWebpackPlugin(),
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'app.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    host: 'localhost',
    hot: true,
    port: 3000,
    open: true,
    historyApiFallback: true, // 404 페이지 대신 index.html로 이동합니다.
    // hot: true, // 모듈 전체를 다시 로드하지 않고 변경된 사항만 갱신합니다.
  },
}
