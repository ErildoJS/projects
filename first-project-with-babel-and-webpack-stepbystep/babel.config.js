module.exports = {
    presets: [//quais presets o babel vai usar
        "@babel/preset-env",//altera as funcionalidades do js que o browser nao entende ainda
        "@babel/preset-react",//altera as func... do react que o browser na entende ainda
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
}