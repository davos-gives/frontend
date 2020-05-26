import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default class IndexRoute extends Route {
  model() {
    return RSVP.hash({
      campaigns: this.store.findAll('campaign'),
      donations: this.store.findAll('donation'),
      receipts: this.store.findAll('receipt'),
      campaign: this.store.createRecord('campaign'),
      slugs: this.store.findAll('slug')
    });
  }
}