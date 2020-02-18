const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    target: "web",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    watch: true,

    entry: './src/index.tsx',

    // and output it into /dist as bundle.js
    output: {
        path: path.join(__dirname, '../backend', '/build'),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(scss)$/,
                use: [{
                    loader: 'style-loader', // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins() { // post css plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer'),
                            ];
                        },
                    },
                }, {
                    loader: 'sass-loader', // compiles Sass to CSS
                }],
            },


        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
