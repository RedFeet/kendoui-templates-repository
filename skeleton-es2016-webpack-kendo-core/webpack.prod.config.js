/*eslint-disable no-var*/

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var AureliaWebpackPlugin = require('aurelia-webpack-plugin');
var pkg = require('./package.json');

var outputFileTemplateSuffix = '-' + pkg.version;

module.exports = {
  entry: {
    main: [
      './src/main'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]' + outputFileTemplateSuffix + '.js',
    chunkFilename: '[id]' + outputFileTemplateSuffix + '.js'
  },
  plugins: [
    new AureliaWebpackPlugin({
      includeSubModules: [
        { moduleId: 'aurelia-kendoui-bridge', include: /(autocomplete|combobox|datetimepicker|window)/ }
      ]
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    }),
    new HtmlWebpackPlugin({
      title: 'Aurelia webpack skeleton - ' + pkg.version,
      template: 'index.prod.html',
      filename: 'index.html'
    })
  ],
  resolve: {
    root: [
      path.resolve('./src'),
      path.resolve('./vendors/telerik.kendoui.2016.1.226.core/js')
    ]
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: {stage: 0} },
      { test: /\.css?$/, loader: 'style!css' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.(png|gif|jpg)$/, loader: 'url-loader?limit=8192' },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff2' },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
    ]
  }
};
