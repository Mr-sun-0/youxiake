module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.youxiake.com',
        ws: true,
        changeOrigin: true,
        headers: {
          Referer: 'https://m.youxiake.com/',
        },
      },
    },
  },
  // overlay: {
  //   warnings: false,
  //   errors: true,
  // },// lintOnSave: false,
};
