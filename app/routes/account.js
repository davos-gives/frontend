import Route from '@ember/routing/route';

export default class AccountRoute extends Route {
  model() {
    return this.store.findRecord('organization', 1);
  }
}
