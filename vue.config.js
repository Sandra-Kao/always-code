module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/my-project/'
    : '/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Always Code - Sandra";
                return args;
            })
    }
}