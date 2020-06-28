import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import CharityValidations from '../../validations/charity';

export default class CreateOrganizationController extends Controller {
  CharityValidations = CharityValidations;

  @service router;

  @action
  submit(changeset) {
    if (changeset.isValid) {
      return changeset.save().then((organization) => {
        window.location = `http://localhost:4000/auth?organization_id=${organization.id}`
      });
    }
  }

  @action
  validate(_element, [object]) {
    return object.validate();
  }
}
