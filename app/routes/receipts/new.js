import Route from '@ember/routing/route';

export default class CampaignsNewRoute extends Route {
  model() {
    return this.store.createRecord('receipt');
  }
}
