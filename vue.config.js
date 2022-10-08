module.exports = {
    css: {
        // this stuff is to enable css modules
        // requireModuleExtension: true
    },
    chainWebpack: config => {
        // set app title
        config.plugin('html').tap(args => {
            args[0].title = 'Test Hotels App';
            return args;
        });
        // delete prefetch to prevent loading js / css chunks on init
        config.plugins.delete('prefetch');
    }
};
