'use strict';

const { MIRAGE_SCENARIO } = process.env;

module.exports = function (environment) {
  let ENV = {
    MIRAGE_SCENARIO,
    modulePrefix: 'davos-frontend',
    environment,
    rootURL: '/',
    locationType: 'auto',
    webFontConfig: {
      google: {
        families: ["Open+Sans:100,200,300,400,500,600,700,800,900", "Arvo", "Cardo", "Lato", "Montserrat", "Oswald", "PT Serif", "Raleway", "Roboto"]
      }
    },
    contentSecurityPolicy: {
      'font-src': "'self' fonts.gstatic.com",
      'style-src': "'self' fonts.googleapis.com"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
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
    ENV.APP.autoboot = false;
  }

  // if (environment === 'production') {
  //   ENV['ember-cli-mirage'] = {
  //     enabled: true
  //   };
  //   // here you can enable a production-specific feature
  // }

  return ENV;
};
