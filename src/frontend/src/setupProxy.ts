const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app: any) => {
    app.use(
        '/api/v1',
        createProxyMiddleware({
            target: 'http://localhost:8000',
            changeOrigin: true
        })
    );
};