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
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self' maps.gstatic.com",
      'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com data:",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com assets-cdn.github.com"
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
    ENV.API_HOST = 'http://localhost:4000';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'production') {
    ENV.API_HOST = 'https://staging-api.davos.gives';
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

  ENV['place-autocomplete'] = {
    exclude: true,
    key: 'AIzaSyBM2pbxy3BErdqqG6ANJYvMK9HtEamKUzs',
  };

  return ENV;
};
