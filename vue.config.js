module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://m.youxiake.com',
                ws: true,
                changeOrigin: true,
            },
        },
    },
    // overlay: {
    //     warnings: false,
    //     errors: false,
    // },
    // lintOnSave: false,
};