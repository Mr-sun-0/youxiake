module.exports = {
<<<<<<< HEAD
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
            errors: false,
        }
    },
    lintOnSave: false
};
=======
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
  //   warnings: false,
  //   errors: true,
  // },// lintOnSave: false,
};
>>>>>>> master
