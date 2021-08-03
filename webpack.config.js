const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        open: true,
        compress: true,
        port: 4000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {

                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,

                type: 'asset/resource',

            },

            {

                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,

                type: 'asset/inline',

            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
        ],
    },
};