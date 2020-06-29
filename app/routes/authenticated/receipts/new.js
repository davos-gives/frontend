import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class CampaignsNewRoute extends Route {
  model() {
    return RSVP.hash({
      receipt: this.store.createRecord('receipt-template'),
      signatures: this.store.findAll('signature'),
      logos: this.store.findAll('logo')
    })
  }
}
