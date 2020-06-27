// ember-cli-build.js
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProduction = EmberApp.env() === 'production';

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require('postcss-import'),
            options: {
              path: ['node_modules']
            }
          },
          require('tailwindcss')('./app/tailwind/config.js'),
          ...isProduction ? [] : []
        ]
      }
    }, autoImport: {
      webpack: {
        module: {
          // to make this work, i must for some reason I don't understand, duplicate this rule.
          rules: [],
        },
      }
    }
  });
  return app.toTree();
};