import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class ReceiptsNewRoute extends Route {
  model({ receipt_id }) {
    return RSVP.hash({
      receipt: this.store.findRecord('receipt-template', receipt_id, { reload: true }),
      signatures: this.store.findAll('signature'),
      logos: this.store.findAll('logo')
    })
  }
}
