import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import CharityValidations from '../validations/charity';

export default class CreateOrganizationController extends Controller {
  CharityValidations = CharityValidations;

  @service router;

  @action
  submit(changeset) {
    if (changeset.isValid) {
      return changeset.save().then(() => {
        this.router.transitionTo('campaigns');
      });
    }
  }

  @action
  validate(_element, [object]) {
    return object.validate();
  }
}
