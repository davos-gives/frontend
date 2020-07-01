import Route from '@ember/routing/route';

export default class DonationsRoute extends Route {
  model() {
    return this.store.findAll('receipt');
  }
}
