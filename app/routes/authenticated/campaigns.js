import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class IndexRoute extends Route {
  model() {
    return RSVP.hash({
      campaigns: this.store.findAll('campaign'),
      donations: this.store.findAll('donation'),
      issuedReceipts: this.store.findAll('receipt'),
      receipts: this.store.findAll('receipt-template'),
      campaign: this.store.createRecord('campaign'),
      slugs: this.store.findAll('slug')
    });
  }

  afterModel(transition) {
    if (transition.receipts.length == 0) {
      this.transitionTo('authenticated.receipts.new');
    }
  }
}