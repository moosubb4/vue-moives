module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/vue-moives/'
        : '/'
    // configureWebpack: {
    //     output: {
    //         publicPath: '/vue-moives/'
    //     }
    // }
}