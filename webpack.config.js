const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
       main: './scripts/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
        
    },
};