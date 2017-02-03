module.exports = {
    entry: "./main.js",
    output: {
        filename: "./bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    module: {
        preLoaders: [
            // Bundle resource files
            { test: /(\.png|\.gif|\.ttf|\.eot|\.woff|\.svg)/, loader: "file-loader" },

            // Bundle stylesheets
            { test: /\.css$/, loader: "style-loader!css-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};
