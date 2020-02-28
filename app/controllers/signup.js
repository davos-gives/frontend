import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SignupController extends Controller {
  @service router;

  @action
  submit(changeset) {
    return changeset.save().then(() => {
      this.router.transitionTo('create-organization');
    });
  }

  @action
  validate() {
    return true
  }
}
