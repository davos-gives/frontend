import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import CharityValidations from '../../validations/charity';
import { tracked } from "@glimmer/tracking";
import config from '../config/environment';

export default class CreateOrganizationController extends Controller {
  CharityValidations = CharityValidations;

  @tracked errorMessage;

  @service router;

  @action
  async submit(changeset) {
    if (changeset.isValid) {
      try {
        await changeset.save().then((organization) => {
          window.location = `${config.apiHost}/auth?organization_id=${organization.id}`
        });
      } catch (error) {
        this.errorMessage = error.error || error;
      }
    }
  }

  @action
  validate(_element, [object]) {
    return object.validate();
  }
}
