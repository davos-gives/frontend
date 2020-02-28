import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default class IndexRoute extends Route {
  model(){
    return RSVP.hash({
      campaigns: this.store.findAll('campaign'),
    });
  }
}