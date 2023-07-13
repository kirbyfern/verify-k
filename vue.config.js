const { defineConfig } = require('@vue/cli-service');


module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/Verify_Kirby/'
        : '/',
    transpileDependencies: ['vuetify'],
};