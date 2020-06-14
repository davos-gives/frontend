import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import AccountValidations from '../validations/account';

export default class SignupController extends Controller {
  AccountValidations = AccountValidations;

  @service router;

  @action
  submit(changeset) {
    if (changeset.isValid) {
      return changeset.save().then(() => {
        this.router.transitionTo('create-organization');
      });
    }
  }

  @action
  validate(_element, [object]) {
    return object.validate();
  }
}
