const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/Movies',
    createProxyMiddleware({
      target: 'https://www.eventcinemas.co.nz',
      changeOrigin: true,
    })
  );
};


// https://www.eventcinemas.co.nz/Movies/GetComingSoon