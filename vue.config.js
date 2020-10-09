module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.youxiake.com',
        ws: true,
        changeOrigin: true,
      },
    },
    // 关闭eslint
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  lintOnSave: true,
};
