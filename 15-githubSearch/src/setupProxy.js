const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
  // 遇见/api1前缀的请求，就会触发该代理配置
  app.use(createProxyMiddleware('/api', {
    target: 'http://localhost:5000', // 请求转发给谁
    changeOrigin: true, // 控制服务器收到的响应头中Host字段的值
    pathRewrite: {"^/api": ""} // 重写请求路径（必须）
  }));
}