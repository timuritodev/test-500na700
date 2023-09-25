const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        filename: path.resolve(__dirname, 'src/index.jsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true,
    },
    performance: {
        hints: false,
        maxAssetSize: 5120000,
        maxEntrypointSize: 5120000,
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
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ],
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ],
                }
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'My web-page',
            filename: 'index.html',
            template: 'src/index.html',
        })
    ]
}