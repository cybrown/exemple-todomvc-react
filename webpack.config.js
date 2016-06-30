var glob = require('glob');

module.exports = {
    context: __dirname,
    entry: {
        app: __dirname + '/index.js',
        test: glob.sync(__dirname + '/src/**/*.spec.ts')
    },
    output: {
        path: __dirname + '/generated',
        filename: '[name].js',
        publicPath: '/generated/'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },
    module: {
        preLoaders: [{
            test: /\.ts$/,
            loader: 'source-map-loader'
        }],
        loaders: [
            { test: /\.html$/, loader: 'html' },
            { test: /\.tsx?$/, loader: 'ts' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};
