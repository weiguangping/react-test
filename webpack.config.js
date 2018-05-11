var path = require('path')
module.exports = {
    // 入口文件
  entry: './src/js/root.js',
    // 出口文件
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015'],
        plugins: ['react-html-attrs'] // 添加组件的插件配置
      }
    },
            // 下面是使用 ant-design 的配置文件
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }
    ]
  }
}
