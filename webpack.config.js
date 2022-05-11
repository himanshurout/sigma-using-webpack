const { resolve } = require('path')
module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_module/,
                use: 'ts-loader'
            },
            {
                test: /\.glsl$/,
                type: 'asset/source'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'web',
    mode: 'production'
}

// const { resolve } = require('path');
// module.exports = {
//     entry: './src/index.js',
//     output: {
//         filename: 'bundle.js',
//         path: resolve(__dirname, 'dist')
//     },
//     devServer: {
//         static: {
//             directory: resolve(__dirname, '')
//         }
//     },
//     target: 'web',
//     mode: 'production'
// }