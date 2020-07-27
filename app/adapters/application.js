import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import config from '../config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api/v1';
  host = config.apiHost;

  @service session;

  @computed('session.data.authenticated.access_token')
  get headers() {
    let headers = {};
    if (this.session.isAuthenticated) {
      headers['Authorization'] = `${this.session.data.authenticated.access_token}`;
    }
    return headers;
  }
}