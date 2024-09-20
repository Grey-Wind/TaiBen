const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].favicon = 'src/assets/notebook/notebook.png';
      return args;
    });
  }
};
