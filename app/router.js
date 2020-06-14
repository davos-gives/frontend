import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('sign-up');
  this.route('log-in');
  this.route('create-organization');
  this.route('receipts', function () {
    this.route('new');
    this.route('edit', { path: ':receipt_id/edit' });
  });
  this.route('donations');
  this.route('account');
  this.route('campaigns', { path: "/" }, function () {
    this.route('new');
  });
});
