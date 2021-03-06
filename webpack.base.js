/* eslint-disable no-sync */
'use strict'; // eslint-disable-line

const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// postcss processors
const autoprefixer = require('autoprefixer');
const initial = require('postcss-initial');
//const stylelint = require('stylelint');

const elementsDir = path.join(__dirname, 'elements');
const elementDirs = glob.sync(path.join(elementsDir, '/*/'));
const libDir = path.join(__dirname, 'lib');
const examplesDir = path.join(__dirname, 'examples');
const testDir = path.join(__dirname, 'test');
const bowerDir = path.join(__dirname, 'bower_components');
const npmDir = path.join(__dirname, 'node_modules');

const includeDirs = [
  elementsDir,
  libDir,
  examplesDir,
  testDir,
  bowerDir,
];

const styleExtractor = new ExtractTextPlugin('[name].css');

let entries = {};

// We will vendor common dependencies of our elements.
entries['dist/vendor'] = [
  'react',
  'react-dom',
  'classnames',
  'document-register-element',
  'document-register-element/build/innerHTML',
  'es6-promise',
  'isomorphic-fetch',
  'dom4',
  'camelcase',
  'browser-url',
  'object-map-to-array',
  './lib/bulbs-elements/register',
  './lib/bulbs-elements/store',
  './lib/bulbs-elements/bulbs-element',
  './lib/bulbs-elements/util/load-on-demand',
  'invariant/browser',
  './lib/bulbs-elements/util/in-view-monitor',
  './lib/bulbs-elements/util/index',
];

elementDirs.forEach(function (dir) {
  let elementName = path.basename(dir);
  let elementEntryPoint = path.join(dir, elementName + '.js');
  entries[elementName] = elementEntryPoint;
});

glob.sync(path.join(elementsDir, '*/*-cms.js')).forEach(function (cmsFile) {
  let elementName = path.basename(path.dirname(cmsFile));
  entries[elementName + '.bulbs-cms'] = cmsFile;
});

exports.plugins = {
  chunker: new webpack.optimize.CommonsChunkPlugin('dist/vendor', 'vendor.bundle.js'),
  styleExtractor: styleExtractor, // eslint-disable-line
  uglify: new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
  clean: new CleanWebpackPlugin(['.test', 'dist'], {
    verbose: true,
  }),
  jquery: new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  }),
};

exports.loaders = {
  babel: {
    test: /\.js$/,
    loader: 'babel',
    include: [
      elementsDir,
      libDir,
      examplesDir,
      testDir,
    ],
  },
  tests: {
    test: /\.test\.js$/,
    loader: 'babel',
    include: [
      elementsDir,
      libDir,
      examplesDir,
      testDir,
    ],
  },
  istanbul: {
    test: /\.js$/,
    loader: 'babel-istanbul',
    include: [
      elementsDir,
      libDir,
      examplesDir,
      testDir,
    ],
  },
  yaml: {
    test: /\.yaml$/,
    loaders: ['json', 'yaml'],
    include: includeDirs,
  },
  json: {
    test: /\.json$/,
    loaders: ['json'],
    include: [
      elementsDir,
      libDir,
      examplesDir,
      testDir,
      bowerDir,
      // including npmDir for json-loader
      // chai-enzyme includes some json files
      npmDir,
    ],
  },
  sass: {
    test: /\.scss$/,
    loaders: [
      'style',
      'css',
      'postcss',
      'sass',
    ],
    include: includeDirs,
  },
  css: {
    test: /\.css$/,
    loaders: [
      'style',
      'css',
    ],
    include: includeDirs,
  },
  styleExtractor: {
    test: /\.scss$/,
    loader: styleExtractor.extract(
      'style-loader',
      'css-loader!postcss-loader!sass-loader'
    ),
    include: includeDirs,
  },
  cssExtractor: {
    test: /\.css$/,
    loader: styleExtractor.extract(
      'style-loader',
      'css-loader'
    ),
    include: includeDirs,
  },
  files: {
    test: /\.(ttf|eot|svg|woff)$/,
    loader: 'file-loader',
    include: includeDirs,
    query: {
      name: 'files/[name].[ext]',
    },
  },
};

exports.config = {
  entry: entries,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '',
  },
  plugins: [
  ],
  resolve: {
    modulesDirectories: [
      'bower_components',
      'node_modules',
      'lib',
      'test',
    ],
    alias: {
    },
  },
  module: {
    noParse: [
      // When webpack parses the `clone` module it includes ~40K of
      //  code that web browsers won't use.
      path.join(npmDir, 'clone'),
    ],
  },
  postcss () {
    return [
      //stylelint({
      //  'extends': 'stylelint-config-standard'
      //}),
      initial({
        reset: 'all',
        replace: true,
      }),
      autoprefixer,
    ];
  },
};
