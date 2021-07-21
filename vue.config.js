const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/always-code/'
        : '/',
    //filenameHashing: false,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Always Code - Sandra";
                return args;
            })

            // .rule('vue')
            // .use('vue-loader')
            // .tap(options => {
            //     // 修改它的选项...
            //     return options
            // })
    }
}