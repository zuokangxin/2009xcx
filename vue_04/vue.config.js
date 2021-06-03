const { TransitionGroup } = require("@vue/runtime-dom");

module.exports = {
    devServer: {
        open: true,
        proxy: {
            '/api': {
                //此处的写法，目的是为了将/api替换成 http:
                target: 'http://121.42.230.80',
                changeOrigin: true
            }
        }
    }
}