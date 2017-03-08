/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }

    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    'responsive-image': [
      {
        sourceDir: 'assets/images/generate',
        destinationDir: 'assets/images/responsive',
        quality: 50,
        justCopy: true,
        removeSourceDir: true,
        supportedWidths: [100, 50]
      },
      {
        sourceDir: 'assets/images/small',
        destinationDir: 'assets/images/smallresponsive',
        quality: 10,
        justCopy: true,
        removeSourceDir: true,
        supportedWidths: [10, 25]
      }
    ]
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
