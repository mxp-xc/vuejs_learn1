const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('assets', resolve('./src/assets'))
      .set('commonjs', resolve('./src/commonjs'))
      .set('network', resolve('./src/network'))
      .set('views', resolve('./src/views'))
      .set('img', resolve('./src/assets/img'))
      .set('tabbar', resolve('./src/assets/img/tabbar'))
  },

  lintOnSave: false
}
