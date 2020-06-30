import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class CampaignsNewRoute extends Route {
  model() {
    return RSVP.hash({
      campaign: this.store.createRecord('campaign'),
      receipts: this.store.findAll('receipt-template')
    })
  }
}
