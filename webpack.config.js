const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env'],
                  },
              },
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                    name(file) {
                        if(process.env.NODE_ENV === 'development') {
                            return '[path][name].[ext]';
                        }

                        return '[contenthash].[ext]';
                    },
                    outputPath: 'images',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/template/index.html'})
    ]
}