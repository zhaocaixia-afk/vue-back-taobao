// 文件别名
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 浏览器配置
  devServer: {
    open: true
  },
  // 文件别名
  chainWebpack: config => {
    config.resolve.alias
      .set('assets', resolve('./src/assets'))
      .set('common', resolve('./src/common'))
      .set('components', resolve('./src/components'))
      .set('network', resolve('./src/network'))
      .set('router', resolve('./src/router'))
      .set('store', resolve('./src/store'))
      .set('views', resolve('./src/views'))
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [__dirname, 'src/assets/css/_basic.scss']
    }
  }
}
