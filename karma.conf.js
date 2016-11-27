module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: [
      'jasmine',
      'chai',
      'riot'
    ],
    plugins: [
      'karma-chai',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-riot'
    ],
    files: [
      'public/helpers/*.js',
      'tags/**/*.tag',
      'test/riot/**/*.js'
    ],
    preprocessors: {
      '**/*.tag': [ 'riot' ]
    },
    reporters: [ 'progress' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [ 'PhantomJS' ],
    singleRun: true
  });
};
