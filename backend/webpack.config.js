const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { NODE_ENV = 'production' } = process.env;

module.exports = {
    entry: './src/index.ts',

    mode: NODE_ENV,
    target: 'node',

    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: 'index.js'
    },

    node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false,   // if you don't put this is, __dirname
        __filename: false,  // and __filename return blank or /
    },

    resolve: {
        extensions: ['.ts', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    },

    externals: [ nodeExternals() ]
}
