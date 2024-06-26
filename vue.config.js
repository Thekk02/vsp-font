const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    compress: true,
    open: true,
    host: '0.0.0.0',
    port: 80,
    https: false,





    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: { //配置跨域
      '/api': {
        pathRewrite: {
          '^/api': '' //请求的时候使用这个api就可以
        },
        target: 'http://localhost:8080', //填写请求的目标地址
        changOrigin: true //允许跨域

      }
    }
  }
})
