const path = require('path')
module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),//arq de entrada
    output: {//onde vao jogar os arqs ja transpilados para versoes js antigas
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'//nome que o arq vai ficar
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public')//onde esta o nosso index.html
    },
    module: {
        rules: [//precisamos informa ao webpack quais arqs ele deve usar
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        loader: 'css-loader'
                    }
                ]
            }, {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
    }