var config = {
    entry: "./src/main.jsx",
    output: {
        path: "dist",
        filename: "bundle.js",
        publicPath: "dist" //in memory path during dev
    },
    devServer: {
        contentBase: "src", //place to find index.html
        inline: true,
        port: 3000
    },
    // resolve extension suffix in import statements
    resolve: {
        extensions: ['', '.js', '.jsx']
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
