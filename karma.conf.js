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
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-riot'
    ],
    files: [
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
    browsers: [ 'Chrome' ],
    singleRun: true
  });
};
