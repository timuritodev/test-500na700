const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        filename: path.resolve(__dirname, 'src/index.jsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    devServer: {
        port: 3005,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    }
}