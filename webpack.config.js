const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist"),
    }
}