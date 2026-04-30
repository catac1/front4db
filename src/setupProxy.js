const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            // target: 'http://192.168.0.7:8081/api', // Lecture Podium IP
            target: 'http://192.168.0.49:8080/api',  // Student IP
            // target: 'http://127.0.0.1:8080/api',
            changeOrigin: true,
            logLevel: 'debug',
        })
    );
};