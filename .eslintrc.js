module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    parserOptions: {

    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        "linebreak-style": 0
    },
};