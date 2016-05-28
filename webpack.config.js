var config = {
    entry: "./src/main.jsx",
    output: {
        path: "dist",
        filename: "bundle.js",
        publicPath: "dist"
    },
    devServer: {
        contentBase: "src",
        inline: true,
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

module.exports = config;
