const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
  // 遇见/api1前缀的请求，就会触发该代理配置
  app.use(createProxyMiddleware('/api1', {
    target: 'http://localhost:5000', // 请求转发给谁
    changeOrigin: true, // 控制服务器收到的响应头中Host字段的值
    pathRewrite: {"^/api1": ""} // 重写请求路径（必须）
  }));

  app.use(createProxyMiddleware('/api2', {
    target: 'http://localhost:5001',
    changeOrigin: true,
    pathRewrite: {"^/api2": ""}
  }));
}