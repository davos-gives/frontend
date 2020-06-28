import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class AccountRoute extends Route {
  @service currentUser;

  async model() {
    return RSVP.hash({
      user: this.currentUser.user,
      organization: this.currentUser.user.organization
    })
  }
}