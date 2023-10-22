const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware( {
            target: "https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/",
    changeOrigin: true,
})
);

};